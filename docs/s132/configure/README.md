---
sidebar: auto
---

# Configuration (Draft)

The S-132 requires only minimal configuration to get working.

The majority of features require no configuration to make work. However, the `boot.conf` file on the IMSAI8080 or Cromemco Z-1 replica must be edited to enable the TTY: (TTY2: & TTY3: - *Cromemco Z-1 only*) and VIO: keyboard (*IMSAI8080 only*) to be recognized as input/output devices by the [HAL in the IMSAI8080](/imsai8080/configure/#sio-2-port-mappings) or the [HAL in the Cromemco Z-1](/cromemcoZ1/configure/#tu-art-device-mappings) respectively.


The VT100 terminal emulation (VT132), on the other hand, has extensive configuration options. See the [VT132 Operation Manual](/vt132/operation/) for details.

## Start-up

With the S-132 connected to the IMSAI8080 or Cromemco Z-1 replica along with a VGA monitor and suitable keyboard, [apply power](#power-options) and press the hardware reset on the IMSAI8080 or Cromemco Z-1 replica. As the replica boots it will force the S-132 to reboot.

The S-132 will perform a hand-shake with the ESP32-PICO-KIT on the replica and you will (may) briefly see the message 

```
Host found
```

 displayed in the upper left-hand corner of your VGA monitor. This will rapidly be replaced with the message
 ```
 Wait
 ```
 and a brief bell tone from the buzzer while the VT100 terminal initializes and retrieves its setting from the NVRAM.

::: tip
When you first start the S-132, or after a full firmware re-flash (not an upgrade) **it is completely normal** to see the massage 
```
Error
```
and a long bell tone from the buzzer.

This is the original behavior of the VT100 terminal and indicates that no settings were saved in NVRAM.

To avoid this message and warning tone in future simply go to one of the VT100 menus and save settings to NVRAM.
:::

## Power Options

The S-132 can be powered from the connected IMSAI8080 or Cromemco Z-1 replica. Additional power is not required.

Alteratively, the S-132 can provide power to the connected IMSAI8080 or Cromemco Z-1 replica if you connect a DC power supply via the DC barrel jack on the S-132. In which case you should remove any USB cable providing power to the connected IMSAI8080 or Cromemco Z-1 replica.

## Configure the IMSAI8080

You must edit the **HAL** settings in the `boot.conf` file.
You can use the Web Desktop, or mount the µSD card in a PC and edit the `/imsai/conf/boot.conf` file directly.

Enable and initialize the S-132  

``` editorconfig
### Enable S-132
S132.init=1
```

To make the S-132 the first (and only) preference for the TTY: and VIO: devices, use:

``` editorconfig
### SIO-2 default port mappings (HAL)
SIO1.portA.device=S132TTY,WEBTTY,UART0
SIO1.portB.device=S132VIO,VIOKBD
```

To make the S-132 the first preference for the TTY: & VIO: devices and also simultaneously use the Web Desktop devices if connected, use:

``` editorconfig
### SIO-2 default port mappings (HAL)
SIO1.portA.device=S132TTY+,WEBTTY,UART0
SIO1.portB.device=S132VIO+,VIOKBD
```

To allow the Web Desktop to capture the TTY: and VIO: devices with priority ove the S-132, use:

``` editorconfig
### SIO-2 default port mappings (HAL)
SIO1.portA.device=WEBTTY,S132TTY,UART0
SIO1.portB.device=VIOKBD,S132VIO
```

For more information on the `boot.conf` see [HAL configuration for the IMSAI8080](/imsai8080/configure/#sio-2-port-mappings)

## Configure the Cromemco Z-1

You must edit the **HAL** settings in the `boot.conf` file.
You can use the Web Desktop, or mount the µSD card in a PC and edit the `/cromemco/conf/boot.conf` file directly.

Enable and initialize the S-132  

``` editorconfig
### Enable S-132
S132.init=1
```

To make the S-132 the first (and only) preference for the TTY: devices, use:

``` editorconfig
### TU-ART default device mappings (HAL)
TUART0.deviceA.device=S132TTY,WEBTTY,MODEM,UART0
TUART1.deviceA.device=S132TTY2,WEBTTY2,SCKTSRV1,UART1
TUART1.deviceB.device=S132TTY3,WEBTTY3,SCKTSRV2,UART2
```

To make the S-132 the first preference for the TTY: devices and also simultaneously use the Web Desktop devices if connected, use:

``` editorconfig
### TU-ART default device mappings (HAL)
TUART0.deviceA.device=S132TTY+,WEBTTY,MODEM,UART0
TUART1.deviceA.device=S132TTY2+,WEBTTY2,SCKTSRV1,UART1
TUART1.deviceB.device=S132TTY3+,WEBTTY3,SCKTSRV2,UART2
```

To allow the Web Desktop to capture the TTY: devices with priority ove the S-132, use:

``` editorconfig
### TU-ART default device mappings (HAL)
TUART0.deviceA.device=WEBTTY,S132TTY,MODEM,UART0
TUART1.deviceA.device=WEBTTY2,S132TTY2,SCKTSRV1,UART1
TUART1.deviceB.device=WEBTTY3,S132TTY3,SCKTSRV2,UART2
```

For more information on the `boot.conf` see [HAL configuration for the Cromemco Z-1](/cromemcoZ1/configure/#tu-art-device-mappings) 

## D+7AIO Settings

T.B.A.