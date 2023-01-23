---
sidebar: auto
editLink: false
---
# S-132

Powered by an ESP32: **S-100 + ESP32 = S-132**

![V1.5 pre-production](./S132_on_IMSAI.jpg)

*Pictured with USB-HID keyboard connected (red interface PCB) and DC power supplied via barrel jack*

## Overview

The S-132 is an add-on for both the [IMSAI8080](/imsai8080/) and the [Cromemco Z-1](/cromemcoZ1/) replicas.

It adds many I/O features normally provided by additional cards on the S-100 bus. It connects to the `Patch` header on the IMSAI8080 or Cromemco Z-1 replica and produces output on a VGA monitor with support for either a PS/2 or USB-HID keyboard.


With the S-132 attached to the IMSAI8080 or Cromemco Z-1 replica you have all the functionality of the following S-100 attached devices, without the need to use the Web Desktop:
- VT100 (TTY:) terminal via serial UART 
  - ([IMSAI SIO-2 S-100 card](http://www.s100computers.com/Hardware%20Folder/IMSAI/SIO/SIO.htm) / [Cromemco 16FDC (TU-ART) S-100 card](http://www.s100computers.com/Hardware%20Folder/Cromemco/16FDC/16FDC.htm))
- two additional VT100 (or C3102) terminals (TTY2: & TTY3:) via serial UART
  - ([Cromemco TU-ART S-100 card](http://www.s100computers.com/Hardware%20Folder/Cromemco/TU-ART/TU-ART.htm) - *Cromemco Z-1 only*)
- [IMSAI VIO (CRT:) S-100 card](http://www.s100computers.com/Hardware%20Folder/IMSAI/VIO%20Board/VIO%20Board.htm) (*IMSAI8080 only*)
- [Cromemco Dazzler S-100 card](http://www.s100computers.com/Hardware%20Folder/Cromemco/Dazzler/Dazzler.htm)
- [Cromemco D+7A Input/Output S-100 card](http://www.s100computers.com/Hardware%20Folder/Cromemco/D+7IO/D+7IO.htm) (40-pin header)
  - 8 digital inputs (5V TTY level - buffered by a 74HC165)
  - 8 digital outputs (5V TTY level - buffered by a 74HC595)
  - 7 analog inputs (0-5V - digitized by an MCP3008 ADC)
  - 2 analog outputs (0-3.3V - produced by the 2 onboard DACs on the ESP32)
- pluggable adapter boards that provide, alternately:  
  - two Cromemco JS-1 analog joysticks & audio line header for external audio amp.
  - a Centronics parallel printer port (DB-25) with passthrough for the LPT: device
  - a prototying PCB for your own designs 

Additionally, the S-132 adds a System Menu (SYS:) where you can
- mount/eject disk images from the 4 emulated floppy disk drives (DSK:A: - DSK:D:)
- view and control the Run/Stop/Reset/Ext.Clr state of the front panel (CPA:)
- view all the system information normally found in the SYS: device on the *Web Desktop*

Lastly, the S-132 has a DC barrel jack and a selectable LM7805 5V regulator allowing you the option of powering your IMSAI8080/Cromemco Z-1, along with the S-132, from a standard DC power supply (from 5V to 12V).

## Functions

Each function of the S-132 can be selected by a keyboard **hot-key** (as with the Linux console on a PC)
- `<ctrl><alt><F1>` = **TTY:** - [VT132](/vt132/) terminal emulator
- `<ctrl><alt><F2>` = **TTY2:** - *Cromemco Z-1 only*
- `<ctrl><alt><F3>` = **TTY3:** - *Cromemco Z-1 only*
- `<ctrl><alt><F4>` = **VIO:** - IMSAI VIO character display - *IMSAI8080 only*
- `<ctrl><alt><F5>` = **DZLR:** - IMSAI Dazzler graphics display
- `<ctrl><alt><F6>` = **SYS:** - System Menu to: 
  - view/eject/mount floppy disks
  - view floppy disk library image list
  - view system state for the guest/host/environment/tasks & config files
  - set S-132 specific settings
- `<ctrl><alt><F7>` = **D7AIO:** - Cromemco D+7A Input/Output display
- `<ctrl><alt><F9>` = **CPA:** - `RUN` - lift CP-A frontpanel switch to the `RUN` position
- `<ctrl><alt><F10>` = **CPA:** - `STOP` - press CP-A frontpanel switch to the `STOP` position
- `<ctrl><alt><F11>` = **CPA:** - `RESET` - lift CP-A frontpanel switch to the `RESET` position
- `<ctrl><alt><F12>` = **CPA:** - `EXT.CLR` - press CP-A frontpanel switch to the `EXT.CLR` position

## Availability

The S-132 is currently in pre-production testing and should be available before March 2023

While you are waiting, checkout the introductory video 

<iframe width="640" height="360" src="https://www.youtube.com/embed/4TmmvyEFCsw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## [Configuration (draft)](configure/)

## [Bill-of-Materials (draft)](bom/)

## [Firmware Install & Console Log](maint/)
