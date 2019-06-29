---
sidebar: auto
---

# Troubleshooting (Draft)

::: tip
If you experience problems that are not covered in this trouble shooting guide, please post them to the [IMSAI 8080esp forum](http://bit.ly/IMSAI8080esp). Maybe someone else has already solved that problem and can help you if I am asleep or unavailable. Also, any problem you have is likely to be experienced by someone else and so, the discussion and resolution via the forum can act as a knowledge base until I can update this guide to include notes on the problem.
:::

## During assembly

::: tip
The trouble shooting outlined here focuses on understanding the messages that are logged to the console by the ESP32 as it boots.
The simplest way to see these messages is to 
1. connect the `ESPP32-PICO-KIT` to a PC using a suitable USB cable
2. start a terminal emulator on the PC set for 115200 baud 8N1 connected to the serial device your OS identifies the ESP32 on
   - Windows will be a COMx: port
   - OSX will be /dev/tty.SLAB_USBtoUART
   - Linux will be /dev/tty.USB0 (or similar, TBA)
:::

### With just the ESP32, PSRAM and microSD card in place (and supporting passives)

#### No firmware

If you see only:

<pre><code>rst:0x1 (POWERON_RESET),boot:0x13 (SPI_FAST_FLASH_BOOT)
flash read err, 1000
ets_main.c 371
ets Jun  8 2016 00:22:57

rst:0x10 (RTCWDT_RTC_RESET),boot:0x13 (SPI_FAST_FLASH_BOOT)
flash read err, 1000
ets_main.c 371
ets Jun  8 2016 00:22:57
</code></pre>

Then that's my fault, and I've shipped you an ESP32-PICO-KIT module without the IMSAI 8080esp firmware flashed. This does **not** require a return and re-mail. But it will require you to follow a number of steps involving installing some tools from the `esp-idf` to flash the firmware yourself. A detailed guide for this unlikely outcome will follow.

#### I see an error in the logs
::: danger
A error is the logs appears as **red text** with a capital **E** as the first character of the line.

I haven't yet figured out how to colour the errors in red in the examples below so I have simply highlighted the error message.
:::

::: tip
Some errors cause the ESP32 to continuously reboot and so the error will be repeated and scroll up the screen and be hard to read. Simply unplug the USB cable to stop the console error log so you can read the error.
:::

If you see something similar to:

<pre><code>Rebooting...
ets Jun  8 2016 00:22:57

rst:0xc (SW_CPU_RESET),boot:0x13 (SPI_FAST_FLASH_BOOT)
configsip: 188777542, SPIWP:0xee
clk_drv:0x00,q_drv:0x00,d_drv:0x00,cs0_drv:0x00,hd_drv:0x00,wp_drv:0x00
mode:DIO, clock div:1
load:0x3fff0018,len:4
load:0x3fff001c,len:4276
load:0x40078000,len:9948
load:0x40080400,len:6464
entry 0x400806cc
<span style="color: #00FF00;">I (269) psram: This chip is ESP32-PICO</span>
<span style="color: #FF0000;">E (269) cpu_start: Failed to init external RAM, needed for external .bss segment</span>
abort() was called at PC 0x400817e4 on core 0
</code></pre>

Then your soldering of the PSRAM has been unsuccessful. You should rework all the solder joints of the PSRAM SOP-8 package, check that you have `C1` and `R14` correctly installed and that you have added the extra 2 sets of 3 male header pins to the ESP32-PICO-KIT board as per the [assembly instructions](../assembly/#esp32-microcontroller-psram-micro-sd-card-socket)

If you see something similar to:

<pre><code><span style="color: #00FF00;">I (832) cpu_start: Pro cpu start user code
I (178) cpu_start: Starting scheduler on PRO CPU.
I (0) cpu_start: Starting scheduler on APP CPU.
<span style="color: #FF0000;">E (224) nvs: Error (UNKNOWN ERROR) opening NVS handle!</span>
I (224) esp32_boot: Log Level set to NONE
I (834) phy: phy_version: 4100, 6fa5e27, Jan 25 2019, 17:02:06, 0, 0
</span></code></pre>

**This is completely normal at this stage**

The NVS (Non Volatile Storage) has not yet been initialised. You must have all the toggles soldered in before you can set the [Startup Configuration in NVS](../configure/#startup-configuration-non-volatile-storage-nvs)

This error will **not** prevent you getting on with the assembly &/or testing the Wi-Fi connectivity.

::: tip
If you see a Wi-Fi Access Point SSID named `imsai8080` on your Wi-Fi network, and can get any of the Desktop UI to load when you point your Chrome browser at [http://imsai8080.local](http://imsai8080.local) then your soldering of the `microSD Card Socket` is perfect.

The Desktop UI is served from the `microSD Memory Card` by the embedded web server and will only show if the connection checks out.
:::

#### I don't see a Wi-Fi Access Point SSID named `imsai8080` but I do see one named `imsai`

At this early stage, this is the only indication you'll get that you haven't successfully soldered the `microSD Card Socket`, or maybe you just forgot to insert the `microSD Memory Card`.

::: warning
I thought a bad `microSD Card Socket` connection would be more obvious at this point and reported by an explicit error message in the console log, but it appears I was wrong. I will work to improve this step in the troubleshooting in a future firmware release.
:::

You also wont (shouldn't) be able to get the Desktop UI to load in your browser if this is your problem. The Desktop UI is served from the `microSD Memory Card` by the embedded web server.

Once you've checked that it's not the latter and are suspecting the former, try some more flux and heat to reflow the solder along the fine pins at the rear of the `microSD Card Socket`. Only add more solder sparingly or you'll start to bridge pins, although some desoldering wick will help you resolve that issue if that is what you suspect has gone wrong.

Once the toggle switches are soldered in you will be able to more get some more conclusive tests done.

### With all the LEDs and ICs in place (and supporting passives)

TBA

### With the toggle switches in place

TAB