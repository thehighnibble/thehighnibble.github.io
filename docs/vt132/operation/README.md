---
sidebar: auto
---

# VT132 Operation Manual (Draft)

## Assembly

It is assumed you have already successfully assembled a working RC2014 and know what you are doing in this respect. The silkscreen on the PCB along with the details provided in the VT132 [Bill-of-Materials](/vt132/bom/) should provide sufficient information to assemble a working VT132.

The production VT132 comes pre-flashed with a working firmware image. Firmware updates are published on the GitHub repository along with instructions on how to flash new firmware.

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

## Hardware configuration

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