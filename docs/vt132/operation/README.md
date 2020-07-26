---
sidebar: auto
---

# VT132 Operation Manual (Draft)

## Assembly

It is assumed you have already successfully assembled a working RC2014 and know what you are doing in this respect. The silkscreen on the PCB along with the details provided in the VT132 [Bill-of-Materials](/vt132/bom/) should provide sufficient information to assemble a working VT132.

::: tip
If you are unsure, or unfamiliar with soldering the Surface Mount Device SMD components, there is an excellent series of five (5) [videos on YouTube produced by The ShadowTron Blog](https://www.youtube.com/playlist?list=PLADkYVZqAxdO1fTDprnp_jRCTQ-9n1OIV) that walk you through the assembly and soldering of the VT132.
:::

The production VT132 comes pre-flashed with a working firmware image. Firmware updates are published on the GitHub repository along with instructions on how to flash new firmware.

::: tip
The large, square ground pad under the ESP32 module **does NOT need to be soldered**.
This is simply a feature of the default PCB footprint for ESP32 modules but is not needed for electrical ground (GND). That is provided by a number of other pins on the ESP32 module (1, 15 & 38).

It can provide additional thermal relief for the ESP32 module but this is generally not required.
The pad can be soldered if using SMT reflow soldering techniques eg. solder paste and a reflow oven.
:::

::: warning Locating the VT132 in the RC2014 backplane
It was noted during the Beta testing that owing to the *height* of the PS/2 keyboard connector, some thought must be given to which slot in the RC2014 backplane you place the VT132.

Slot 1 in the **Backplane Pro** is always a good choice but you may need to add the extra 20 pin female header to the backplane for this slot to pick up the bus pins for the PortB UART.

Some suggested adding electrical insulation tape over the PS/2 connector shell to insulate it from an adjacent PCB.
:::

## Hardware configuration

::: warning NVR (Non-volatile RAM) is not initialized on a new VT132

- At power-on or reset, following the 'Wait' message, a new VT132 will display 'Error' along with a series of bells
- This is expected because the NVR has not been initialized
- Once you write settings to the NVR (see Setup Screens) this error should not persist
:::

::: danger Hardware reset

- The hardware 'Reset' press button on the PCB reboots the ESP32 (EN line reset)
- This will cause both the VT100 terminal and the modem to reset
- and will lose any unsaved settings on both devices
:::

::: tip

- The hardware 'Prog' press button has two functions:
  - if flashing firmware to the ESP32 module over the FTDI connector this button grounds the 'BOOT' line (pin 25) for programming
  - in **normal operation** pressing this button changes the baud rate of the modem
    - each press cycles to the next supported serial baud rate of the modem (4800, 9600, 14400, 19200, 38400, 57600, 1152000)
    - the selected speed is echoed in a message to the modem UART eg. `BAUD 19200`
    - you should keep pressing the button until you see the desired baud rate displayed
    - the selected speed is stored in NVRAM and persists through resets and power cycling
:::

There is minimal hardware configuration that needs to be performed on the VT132

For normal operation on the RC2014 Pro bus (or similar) both the Port A and Port B UARTS from an existing serial card ([RC2014 Dual Serial](https://rc2014.co.uk/modules/dual-serial-module-sio2/), or similar) should be enabled by placing shunts on the 4 jumpers JP1 to JP4 (RxA/TxA and RxB/TxB)

The `FTDI Program` 6-pin header on the top of the PCB **is not** connected to Port A on the RC2014 Pro bus. It is connected to a separate UART on the ESP32 and is only used for

- updating/re-flashing the firmware on the ESP32
- monitoring debug logs from the ESP32
- future expansion

The `Modem Port B` 6-pin header on the top of the PCB **is** connected to Port B Rx/Tx lines on the RC2014 Pro bus. In addition it:

- provides RTS/CTS flow-control lines, when enabled for the modem
- is designed to be compatible with serial cards such as the [SC104 Z80 SIO/2 Module](https://smallcomputercentral.wordpress.com/sc104-z80-sio-2-module-rc2014/) or similar

If you want to provide power to, or take power from either of the 6 pin headers then JP5 and JP6 will provide power or isolate the `Vcc` pin in the `FTDI Program` and `Modem Port B` 6-pin headers respectively.

::: danger

You should normally only connect one power source to the system at a time.
:::

## [VT100 (enhanced) Operator Information](vt100/operator/)

## [VT100 (enhanced) Programmer Information](vt100/programmer/)

## ['AT' (Hayes) Serial Modem Operation Manual](modem/)

## [Over-the-Air (OTA) Firmware Update Procedure](ota/)