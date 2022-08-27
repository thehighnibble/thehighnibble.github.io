---
sidebar: auto
---

# Configuration (Draft)

## Overview

::: warning
Just like the real Cromemco Z-1, the default configuration of your kit is an empty machine. While you *can* enter instructions using the toggle switches (and you *should* experiment with this sometime) it's more interesting to run some real software.
The default configuration is like an empty machine with no ROM only RAM.
:::

In order to run any applications, you will need to activate a virtual ROM (eg. to run BASIC, or boot a floppy disk) and maybe load an operating system (such as CDOS or Cromix) from a virtual disk.

Also like the original computer, your Cromemco Z-1 has no video output port. Owners of the original Cromemco Z-1 would connect a serial terminal (either a teletype printer or visual display unit) to a serial port. While you can still do this (see [Serial Communications](http://localhost:8080/cromemcoZ1/configure/#serial-communications-rs232-usb) section), this modern kit offers a much easier solution using Wi-Fi.

Once power is applied to your kit, the ESP32 will create a Wi-Fi Access Point. You can connect your computer to this Wi-Fi network as if it were connected to a Wi-FI router. You can then open a web page, the Desktop UI, that will give you full access to the Cromemco Z-1 - including a virtual serial terminal (TTY:), floppy disks, printer (LPT:) and more.

Once connected, you can then configure the Cromemco Z-1 to connect directly to your home Wi-Fi, so you can use it without having to change your Wi-FI settings again.

## Getting connected

* Plug in the power to the Cromemco Z-1 kit.
* On your computer, open the Wi-Fi settings and select the `cromemco` network (SSID).
* When prompted for a password, enter `password`.

Your computer should now be connected, and you will be able to open the Desktop UI. The web interface has been written and tested with the Chrome browser in mind, and you might find it works differently if you are using a different browser.

* If you have a Mac, open your browser and enter `cromemco` or `cromemco.local` as the web address.
* If you have a PC, open your browser and enter `cromemco` or `192.168.4.1` as the address.

## Default configuration

### Cromemco Z-1 (guest)

::: warning
The default configuration is like an empty machine with no ROM only RAM.
:::

* RAM is 64K occupying the entire address space from `0000h` to `FFFFh`
* CPU is Zilog Z80 @ 2MHz with support for undocumented op-codes
* No boot ROM is active by default

### ESP32 (host)

* Wi-Fi set to **Access-Point (AP)** mode with the default SSID of `cromemco`, password of `password`
* Hostname (HOSTNAME environment variable) set to `cromemco` (`cromemco.local` for mDNS)
* Port (PORT environment variable) set to `80`
* Timezone (TZ environment variable) set for AEST+10, ADST+11 (ie. Sydney, Australia)
* Time server (NTP_SERVER environment variable) set to `pool.ntp.org`
* POST (Power On Self Test) disabled
* Console log level set to `NONE` (details to follow)

::: tip
Once you are connected to the Wi-Fi network, start a Chrome browser and enter the URL `http://cromemco` to see the Desktop UI.
:::

## Startup configuration (Non-Volatile Storage, NVS)

The startup configuration is modified via the toggle switches on the front panel.

To enter *startup configuration mode*, follow the sequence:

1. ensure the ESP32 is connected to a USB power source, the red LED on the ESP32 board should be illuminated
2. turn the front panel power switch **off**, `PWR OFF`, the down position
3. hold the `EXAMINE` toggle in the **Examine**, up position
4. press and release the `Reset` buttons while holding the `EXAMINE` toggle up
5. hold the `EXAMINE` toggle for a second or two
6. release the `EXAMINE` toggle

::: tip
There are 2 `Reset` buttons available that both do the same thing:

* The `Tactile Switch SPST-NO` you installed in the `Reset` position on the PCB
* The small tactile switch on the ESP32 board marked `EN`
* **NOT** the *blue toggle switch* on the front panel
:::

The Cromemco Z-1 should now be in *startup configuration mode*. This is indicted by a running LED pattern (right to left) on the 4 LEDS at the right hand side of the front panel (`HOLD`, `WAIT`, `RUN`, `INTERRUPTS ENABLED`).

::: tip
The current *startup configuration value* is displayed on the Address Bus LEDs (bits 0-15) when you enter *startup configuration mode*.
:::

::: warning
When you **Deposit** a new *startup configuration value*, all the bits of the current value are overwritten. If your objective is to **modify** the existing value changing only a few of the bits, you must toggle in all the bits of the existing value indicated by the Address Bus LEDs and then switch the bits you want to configure differently, before you **Deposit** this new value.
:::

::: tip Booting with RDOS 3.08 ROM (suitable to boot from a floppy disk to CDOS, Cromix or CP/M, or boot from hard disk)
To configure the Cromemco Z-1 to boot into the ROM based *RDOS 3.08* in Z80 mode @ 4 MHz, the following startup configuration value can be used.

* Binary: 0000 1001 0100 0000
* Hexadecimal: 0940

1. Enter *startup configuration mode* (above)
2. Toggle in this value on the **Address** toggle switches
3. Raise the `DEPOSIT` toggle to the **Deposit**, up position to store the entered startup configuration value.
4. Reboot the Cromemco Z-1 by raising the `RESET` toggle
:::

| Address Bit | Name | Equivalent Flag | Description |
| ----------: | ---- | --------------- | ----------- |
| 0 | NVS_POST | n/a | Enable Power On Self Test (POST) |
| 1-2 | NVS_LOG_LEVEL | n/a | Set ESP32 console **Log Level**, 0 = NONE; 1 = ERROR; 2 = WARN; 3 = INFO |
| 3 | NVS_IF_STA | n/a | Set Wi-Fi Mode,  0 = Access Point Mode (AP); 1 = Station Mode (STA) |
| 4 | NVS_Z80 | `-z`, `-8` | This bit is ignored as the Cromemco Z-1 is always running a Z80 CPU |
| 5 | NVS_NO_UNDOC | `-u` | Suppress support for undocumented op. codes, 1 = `-u` |
| 6 | NVS_4MHZ | `-f` | Set CPU speed, 0 = 2 MHz `-f 2`; 1 = 4 MHz `-f 4` |
| 7 | NVS_UNLIMITED | `-f 0` | Set CPU speed to Unlimited, 0 = use speed from bit 6; 1 = Unlimited `-f 0` |
| 8-10 | NVS_MEMORY_MAP | `-M` | Set memory map, 0 = default 64K RAM, 1-7 = use memory map *n* `-M n` |
| 11 | NVS_BANK_ROM | `-R` | Enable FDC-16/64 style Banked ROM functionality, 1 = `-R`. Only compatible with RDOS ROM images. |
| 12-14 | | | Reserved for future use |
| 15 | NVS_AUTO_RUN | | Autorun - The CPU will automatically run when the machine is switched on (`PWR ON`)|

To set the startup configuration mode value, follow the sequence:

1. To **set** a bit, put the corresponding **Address** toggle switch in the **up** position.
2. To **clear** a bit, put the corresponding **Address** toggle switch in the **down** position.
3. Raise the `DEPOSIT` toggle to the **Deposit**, up position to store the entered startup configuration value.

::: warning
The Cromemco Z-1 must be rebooted for the new configuration to take effect. 

This can be done by raising the `RESET` toggle or by pressing a `Reset` switch.
:::

::: tip
For further details about the *Equivalent Flag* refer to the **Z80PACK** documentation for the **cromemcosim** machine.
:::

::: tip
The memory map indexed by NVS_MEMORY_MAP (1-7) is defined in the configuration file `system.conf`
See [Memory maps](#memory-maps) for details.
:::

## Serial Communications (RS232, USB)

The **Cromemco Z-1** is configured with three (3) *virtual* **TU-ART** UART devices.

The first *virtual* UART is the console port on the **Cromemco FDC16/64** floppy disk controller.
The second and third *virtual* UARTs are the A and B devices on the **Cromemco TU-ART** serial/parallel I/O interface.

The board/port/devices are assigned as follows:

| Board | UART device | I/O ports (hexadecimal) | Default Connected Device | Default Desktop Device |
| :-: | :-: | :-: | - | :-: |
| FDC-16/64 | TU-ART 0A | 00-09 | Physical **UART0** (Tx/Rx Patch pins & USB) | TTY: |
| TU-ART #1 | TU-ART 1A | 20-29 | Physical **UART1** (IO22/IO5 Patch pins) | TTY1: |
|           | TU-ART 1B | 50-59 | Physical **UART2** (IO32/IO33 Patch pins) | TTY2: |

 When the machine boots, the *virtual* **TU-ART 0A** is routed to the *physical* **UART0** on the `ESP32-PICO-KIT`.

* This enables you to use any software on the Cromemco Z-1 that communicates via this UART as the console using a terminal or terminal emulator depending your method of connection.
* The default speed with the current firmware is 115200 baud @ 8N1

::: tip
Both the *ESP32 console log* and the Cromemco console **TU-ART 0A** (TTY:) will be directed to the serial **UART0**. If you set the `NVS_LOG_LEVEL` to `INFO` (3) this will likely send console log messages during normal use of the machine. It is recommended to set the `NVS_LOG_LEVEL` to a lower level during normal operation.
:::

::: warning
Behavior of serial communications is further effected by the settings on the *virtual* **TU-ART** UARTs. See [TU-ART device mappings](#tu-art-device-mappings) in the `system.conf` file below, for further details.
:::

::: warning
If you start the **Desktop UI** from a web browser and the *TTY: virtual device* is connected (default behavior) then the *virtual** TU-UART 0A device is disconnected from the *physical* UART0 on the `ESP32-PICO-KIT` and instead re-routed to the *TTY: virtual device* on the Desktop UI. If the *TTY: virtual device* is disconnected, then the TU-UART 0A device is re-routed back to the UART0 on the `ESP32-PICO-KIT`, ie. only one of these two destinations can be connected at a time.

**Note: the *ESP32 console log* is always sent to the physical UART0 and is never redirected.**
:::

### Serial UART over USB

The `ESP32-PICO-KIT` supports serial communications from UART0 over USB. It uses a *Silicon Labs CP210x USB to UART bridge*

1. connect the `ESPP32-PICO-KIT` to a PC using a suitable USB cable
2. start a terminal emulator on the PC set for 115200 baud 8N1 connected to the serial device your OS identifies the `ESP32-PICO-KIT` on
   * Windows will be a COMx: port
   * OSX will be /dev/tty.SLAB_USBtoUART
   * Linux will be /dev/ttyUSB0 (or similar, TBA)

::: tip
If you do not see a TTY/COM port on your PC presented by the ESP32-PICO-KIT when connected, you may need to install a driver for the *Silicon Labs CP210x USB to UART bridge*.

Drivers are available direct from the manufacturer at [https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)
:::

Additional information is available from the Espressif (manufacturer of the `ESP32-PICO-KIT`) web site at [https://docs.espressif.com/projects/esp-idf/en/latest/get-started/establish-serial-connection.html](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/establish-serial-connection.html)

### Serial UART over RS232

::: warning
*Serial UART0 over RS232* and *Serial UART0 over USB* are mutually exclusive, ie. they cannot be used at the same time.
:::

*Serial UART over RS232* is configured by using the supplied jumpers/shunts to bridge the required pins on the `Patch` and `Comms` headers accessible on the rear of the PCB, and connecting a suitable RS232 device to one of the DE-9M connectors labeled `RS232-1` and `RS232-2`

RS232 line levels are provided by the Maxim MAX3232 IC see the [data sheet](https://datasheets.maximintegrated.com/en/ds/MAX3222-MAX3241.pdf) for details.

You must position 4 of the jumpers/shunts provided to enable a *Serial UART over RS232*. This image shows the currently supported configuration for the jumpers/shunts on both the `Patch` and `Comms` headers for **UART0** to `RS232-1`

![Patch & Comms jumpers](./rs232_jumpers.jpg)

#### UART0 to RS232-1

##### Patch header

* bridge Tx - T1 - vertical *position second from right*
* bridge Rx - R1 - vertical *right most position*

##### Comms header

* bridge @ Tx1 - horizontal *second position from top*
* bridge @ Rx1 - horizontal *fourth position from top*

#### UART1 to RS232-2

##### Patch header

* bridge IO22 - T2 - vertical *position third from right*
* bridge IO5  - R2 - vertical *position fourth from right*

##### Comms header

* bridge @ Tx2 - horizontal *third position from bottom*
* bridge @ Rx2 - horizontal *last position at bottom*

### Configuring physical UART parameters (speed, data & stop bits)

You can configure the parameters for both **UART0** (`RS232-1`/USB) and **UART1** (`RS232-2`) via the `boot.conf` file.

See [UART Configuration](./#uart-configuration) in the `boot.conf` file below, for further details.

## Wi-Fi Communications

The ESP32 has on-board Wi-Fi and can boot in either **Access Point** (AP) or **Station** (STA) mode. The mode is determined by the **NVS_IF_STA** bit in the *startup configuration* stored in NVS and described [above](#startup-configuration-non-volatile-storage-nvs).

* In AP mode, the ESP32 acts as an Access Point and broadcasts a system defined SSID and provides DHCP services for clients to connect
  * The **SSID** hardcoded in the firmware is *espressif* with a **password** of *password*, this will only be used if the **boot.conf** file on the microSD card cannot be read or does not include a `HOSTNAME=name` statement, see [Boot.conf file](#boot-conf-file) below.
  * If a `HOSTNAME=name` statement is found in the **boot.conf** file, then this hostname is also used as the **SSID** in AP mode. In this case, the **password** still remains *password*
* In STA mode, the ESP32 acts as a Wi-Fi station or client and can join an existing Wi-Fi network (supporting WPA or WPA2, but not Enterprise WPA).
  * The **SSID** and **password** of the desired Wi-Fi network must be configured in the **boot.conf** file using the `SSID=name` and `PASSWORD=password` statements, see [Boot.conf file](#boot-conf-file) below.

::: tip
The **boot.conf** file can be edited via the **SYS:** virtual system device in the Desktop UI while connected to the Cromemco Z-1 running in AP mode.
Alternatively the **microSD Card** can be mounted in a PC and the `/cromemco/conf/boot.conf` file edited directly in a text editor then the **microSD Card** returned to the Cromemco Z-1 before it is powered on.
:::

::: warning
When the Cromemco Z-1 is configured to work in station mode (STA) but it is unable to make a connection to the configured Wi-Fi network within 30 seconds, the ESP32 will reboot and temporarily start in AP mode.

* This enables you to connect to the Cromemco Z-1 from a browser on the advertised SSID and modify/correct the STA mode Wi-Fi configuration.
* The simplest way to determine if this has happened is to look for the AP mode SSID being broadcast, or to look at the ESP32 console log output on UART0/USB.
:::

::: danger
The design of the Cromemco Z-1 is intended for only **one** Wi-Fi client (browser) to be connected at any given time. It is untested and not recommended to connect multiple clients at the same time.
:::

## Boot.conf file

The **boot.conf** file is located on the microSD card with the path `/cromemco/conf/boot.conf`
As the ESP32 boots this file is loaded, each line parsed and the **variable=value** pair is added to the environment (like posix environment variables).

::: danger
There is little to no error checking done at the moment. If you significantly change this file and remove a variable, or leave a value blank you may cause the boot process to fail. I know, I've managed to do that once or twice.

The solution is to mount the microSD card on a PC and edit the **boot.conf** file to fix the problem.
:::

### Default boot.conf

The default configuration, as shipped (in Release v1.10.0-beta.1) is a follows:

```conf
### Network configuration
NTP_SERVER=pool.ntp.org
TZ=AEST-10AEDT,M10.1.0,M4.1.0
HOSTNAME=cromemco
PORT=80
SSID=mySSID
PASSWORD=myPASSWORD
WIFI.sta.scan=1
#WIFI.password.hide=1
### UART configuration
#UART0=115200,cs8
#UART1=115200,cs8
#UART2=115200,cs8
### Performance parameters
#TTY.netsrv.buffer_delay=33
#TTY2.netsrv.buffer_delay=33
#TTY3.netsrv.buffer_delay=33
#LPT.netsrv.buffer_delay=33
### Harddisk images
#HARDDISK.hd0=hd0.hdd
#HARDDISK.hd1=hd1.hdd
#HARDDISK.hd2=offline
### TU-ART default device mappings (HAL)
#TUART0.deviceA.device=WEBTTY,MODEM,UART0
#TUART1.deviceA.device=WEBTTY2,SCKTSRV1,UART1
#TUART1.deviceB.device=WEBTTY3,SCKTSRV2,UART2
### Modem initialization string
MODEM.init=ATS0=1S15=1&A1 #S0=1 auto-answer after 1 ring, S15=1 enable telnet protocol
#MODEM.init=ATS15=1 #S15=1 enable telnet protocol
```

### Network Configuration

The *Network configuration* entries should be familiar and mostly self explanatory.

::: tip
The TZ variable cannot use values like *Sydney/Australia* (Olson format) but must use explicitly defined timezone strings (POSIX format) eg. `TZ=AEST-10AEDT,M10.1.0,M4.1.0` which is correct for Sydney, Australia.

A file with TZ variable values for many timezones can be found at [https://www.di-mgt.com.au/src/wclocktz.ini](https://www.di-mgt.com.au/src/wclocktz.ini)
[Credit to: John Mann in the Forum](https://groups.google.com/d/msg/imsai8080esp/PdNyxAOeBhU/7_IgKXXbCAAJ)

An article that defines the POSIX format can be found at [Specifying the Time Zone with TZ](https://www.gnu.org/software/libc/manual/html_node/TZ-Variable.html), however please note, the "third format" referenced in this article is the Olson format, and not supported on the ESP32.
:::

### UART Configuration

The *UART configuration* entries define the speed, data & stop bits for the three physical UARTs on the ESP32, **UART0**, **UART1** and **UART2**

For example:

```conf
### UART configuration
UART0=115200,cs8 # ie. 115200, 8N1 - not required because this is default
UART1=9600 cs7 cstopb parenb parodd # ie. 9600, 7O2
```

* parameters can be separated by *spaces* or *commas*
* parameters are *case insensitive*
* parameters follow the convention used by the `screen` program under *unix/linux/gnu* ie.:
  * default is `115200,cs8` in other words 115200 8N1
  * standard baud rates from `110` to `230400` e.g. 110, 300, 1200, 2400, 4800, 9600, 19200, 38400, 57600, 115200, 230400 others may work, but you'll have to experiment
  * `cs7` - for 7 data bits
  * `cs8` - for 8 data bits
  * `cstopb` - for 2 stop bits, default is 1
  * `parenb` - for even parity, default is none
  * `parenb,parodd` - for odd parity

### Performance parameters

The *Performance parameters* exist only for the four devices `TTY:` (default: TU-ART 0A), `TTY2:` (default: TU-ART 1A), `TTY3:` (default: TU-ART 1B)and `LPT:` and apply only to websocket communication to the *Desktop UI*

They specify a time in milliseconds (ms) during which output to the device will be buffered (up to the next line feed character) and transmitted in a single (websocket) packet. This can greatly improve performance of both the TTY: and LPT: devices. If used, recommended optimal settings are:

```conf
#Performance parameters
TTY.netsrv.buffer_delay=33
TTY2.netsrv.buffer_delay=33
TTY3.netsrv.buffer_delay=33
LPT.netsrv.buffer_delay=33
```
### Harddisk image

Three (3) harddisks are supported with the *virtual* **Cromemco WDI-II** winchester harddisk interface.

A harddisk image (~10MB) can be mounted for each of `hd0:`, `hd1:` & `hd2:`

Any *online* harddisk image is visible on the desktop as `HD0:`, `HD1:` or `HD2:`

Harddisk images are visible in the disk library `LIB:` and indicated with a *harddisk* icon. You can drag-and-drop a new harddisk onto the `LIB:` window to upload a new harddisk image.

The default harddisk image mappings are: (these do not need to be specified in the `boot.conf` file)

```conf
HARDDISK.hd0=hd0.hdd
HARDDISK.hd1=hd1.hdd
HARDDISK.hd2=hd2.hdd
```

::: tip
The harddisk image file must reside in `/cromemco/disks/` and end with `.hdd` eg. `/cromemco/disks/hd0.hdd`.

Do not use the `.dsk` extension for a harddisk image as it will be confused with a floppy disk image.

If a harddisk image file is not found then the harddisk is marked as *offline* and wont appear on the desktop.
:::

You can specify any haddisk image file in the directory for any harddisk, or specify **offline** to force a harddisk to be *offline*

e.g.

```conf
### Harddisk images
HARDDISK.hd0=disk1.hdd
HARDDISK.hd1=workdisk.hdd
HARDDISK.hd2=offline
```

::: tip
An empty (all zero (0) byte values) file of the required size (10,874,880 bytes) is provided in the disk library `LIB:` named `empty.hdd`.

You can copy and rename this file to create new harddisk images, ready to be intialised, formatted and mounted as required by CDOS or Cromix.
:::

::: tip
If you change a harddisk image you must **reboot** the Cromemco Z-1 to load the new image
:::

::: warning
There is no UI for changing hard disk images, the required image must be set using the environment variables `HARDDISK.hd[0..2]` in the `boot.conf` file and then the ESP32 hard reset to reload the environment.
:::

### TU-ART device mappings

A HAL (Hardware Abstraction Layer) enables mapping of character mode devices to the three (3) virtual TU-ART serial devices
- the TU-ART device mapping configuration is loaded and reported to the debug console (UART0/USB) when the Cromemco Z-1 is started/powered-on
- the TU-ART device mapping configuration is also displayed in the SYS: virtual device on the desktop UI
- when no TU-ART device mapping configuration is specified, a standard configuration is the default, and reported as follows:

```config
TU-ART Devices
TUART0.deviceA = WEBTTY,MODEM,UART0
TUART1.deviceA = WEBTTY2,SCKTSRV1,UART1
TUART1.deviceB = WEBTTY3,SCKTSRV2,UART2
```

the purpose of the HAL is to:
- simplify the addition of new character mode devices in future
eg. additional hardware UART; network sockets; additional telnet listeners; new virtual peripherals on the desktop UI
- enable the user to assign specific devices to each of the three (3) virtual TU-ART serial ports
- details of configuring the TU-ART device mapping will be published soon

### Modem initialization string

This string will be processed by the 'AT' Modem when it is initialised and reset (ie. with the command `ATZ`)

For example, to initialize the modem for:
- auto-answer after 1 ring (`ATS0=1`)
- enable telnet protocol (`ATS15=1`)
- enable answer mode (ie. listen) in "daemon" mode (`AT&A1`)
- with the commands concatenated into a single command string `ATS0=1S15=1&A1`

add the following line:

```conf
#Modem initialization string
MODEM.init=ATS0=1S15=1&A1
```

## System.conf file

The **system.conf** file is located on the microSD card with the path `/cromemco/conf/system.conf`

::: warning
Some settings in this file are legacy, maintained for source code compatibility with the *Z80PACK, cromemcosim* machine. Only the parameters documented here have any effect on the **Cromemco Z-1**.
:::

### Memory maps

The only parameters that effect the **Cromemco Z-1** are the `[MEMORY n]` sections:

```config
# <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
# memory configurations in pages of 256 bytes
#	start,size (numbers in decimal, hexadecimal, octal)
# up to 7 memory sections allowed
# up to 6 ram/rom statements per section allowed
#
# NOTES:
# - memory sections only effect bank 0 of the machine's memory
# <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

[MEMORY 1]
# Memory configuration for running CP/M, CDOS, CROMIX with RDOS0308:
# 256 pages RAM, 32 pages ROM
ram		0,256
rom		0xc0,32,rdos0308.hex
# Power-on jump address for the boot ROM
boot		0xc000

[MEMORY 2]
# Memory configuration for RDOS1:
# 256 pages RAM, 4 pages ROM
ram		0,256
rom		0xc0,4,rdos1.hex
# Power-on jump address for the boot ROM
boot		0xc000

[MEMORY 3]
# Memory configuration for RDOS252:
# 256 pages RAM, 32 pages ROM
ram		0,256
rom		0xc0,32,rdos252.hex
# Power-on jump address for the boot ROM
boot		0xc000

[MEMORY 4]
# Memory configuration for Z1MON 1.0:
# 256 pages RAM, 16 pages ROM
ram		0,256
rom		0xe0,16,z1mon-1.0.hex
# Power-on jump address for the ROM
boot		0xe000

[MEMORY 5]
# Memory configuration for Z1MON 1.4:
# 256 pages RAM, 16 pages ROM
ram		0,256
rom		0xe0,16,z1mon-1.4.hex
# Power-on jump address for the ROM
boot		0xe000

[MEMORY 6]
# Memory configuration for Monitor/BASIC ROM:
# 256 pages RAM, 16 pages ROM
ram		0,256
rom		0,16,mbc.hex
# Power-on jump address for the ROM
boot		0
```

::: tip
A memory map is selected by setting the NVS_MEMORY_MAP bits in the [Startup configuration, NVS](#startup-configuration-non-volatile-storage-nvs) for details.
:::