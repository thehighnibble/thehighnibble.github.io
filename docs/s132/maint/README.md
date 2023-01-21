---
sidebar: false
editLink: false
---
# S-132 Firmware Install & Console Logs

## Full install

A full install is useful for:

- initializing a new (blank) **ESP32-WROVER** module for the S-132
- returning an S-132 to "factory defaults" based on the latest firmware
  - ie. this process will clear any values you have previously saved to the NVRAM

::: tip
This tool can also be used to view the console log of the ESP32, useful for trouble-shooting

Simply:

- click the **CONNECT** button (below)
- chose your serial port/device
- click on **LOGS & CONSOLE** on the *Device Dashboard*


:::

::: warning
When you click **INSTALL THE FULL S-132 IMAGE**
This will erase the entire flash on the ESP32 and install
the indicated build of the S-132 firmware

It is completely safe, however, you will loose any settings
you have saved to NVRAM
:::

::: danger
This install process is not suitable for the **ESP32-WROVER-E** module at this time.

If you have an ESP32-WROVER-E you must use the Espressif `esptool.py` and `espefuse.py` tools to setup and install the firmware to be compatible with the S-132
:::

### Note:
- The **DEVICE RESET** function on the *LOGS & CONSOLE* screen does not work with the S-132
- When you click **INSTALL** on the *Confirm Installation* dialog 
  - it will say **Preparing installation** and wait for the ESP32 to enter *bootloader* mode
  - you will need to manually set the ESP32 into *bootloader* mode by:
    - pressing both the `Reset` and `Prog` buttons on the S-132, together
    - release the `Reset` button **first**, and about 1 second later
    - release the `Prog` button
- If you abort an install by pressing the `<ESC>` key on you keyboard you may not be able to reconnect to the ESP32, with a message about the *serial port is already open*. You will need to **reload** the web page to release the serial port

<esp-web-install-button manifest="/manifests/s132-manifest.json">
</esp-web-install-button>