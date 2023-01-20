---
sidebar: auto
---

# S-132 Bill of Materials (Draft)

::: danger Note:
The BOM is yet to be updated to include details of 

- the USB interface for USB-HID keyboard support
:::

::: tip
To see the images in full size you can right-click on an image and `Open Image in New Tab`
:::

::: warning Notes on the PCB
- PCBs are pre-production (V1.5) and will be revised
- Part identifiers are correct and there are no known errors
- However, component numbering sequences contain gaps, there is no:
  - U5
  - R14 - R17
  - C8, C9
:::

## Main S-132 PCB (green)

### Surface Mount Device (SMD) components

::: tip Don't Panic

- Yes there are four SMD components!
- You can do it!
- You can do it with a regular soldering iron, but you are going to need flux
:::

| Part | Quantity | PCB | Description |
| ---- | --------:| --- | ----------- |
| ![ESP32-WROVER](./parts/WROVER.png) | 1 | ESP32-WROVER (U1) | <h4>ESP-32 WROVER Module</h4> |
| ![NCP1117-33](./parts/LDO.png) | 1 | NCP1117-33 U2 | <h4>NCP1117-33 LDO Linear Regulator</h4> |
| ![74HC00]() | 1 | 74HC00 U10 | <h4>74HC00 SOIC-14 Quad NAND Gate</h4> |
| ![74CBTLV3257]() | 1 | 74CBTLV3257 U3 | <h4>74CBTLV3257 SOIC-16 Quad 1-of-2 Multiplexer/Demultiplexer</h4> |

### Through Hole (THT) components

| Part | Quantity | PCB | Description |
| ---- | --------:| --- | ----------- |
| ![120 Ohm](./parts/RES_120.png) | 2 |  R1, R2 | <h4>120 Ohm Resistor [Brown, Red, Black, Black, Brown]</h4> Only required if using the PS/2 keyboard |
| ![2K Ohm](./parts/RES_2K.png) | 2 |  R3, R4 | <h4>2K Ohm Resistor [Red, Black, Black, Brown, Brown]</h4> Only required if using the PS/2 keyboard |
| ![10K Ohm](./parts/RES_10K.png) | 1 |  R5, R13 | <h4>10K Ohm Resistor [Brown, Black, Black, Red, Brown]</h4> |
| ![806 Ohm](./parts/RES_806.png) | 3 |  R6, R8, R10 | <h4>806 Ohm Resistor [Grey, Black, Blue, Black, Brown]</h4> |
| ![402 Ohm]() | 3 |  R7, R9, R11 | <h4>402 Ohm Resistor [Yellow, Black, Red, Black, Brown.]</h4> |
| ![4K7 Ohm](./parts/RES_4K7.png) | 1 |  R12 | <h4>4.7K Ohm Resistor [Yellow, Violet, Black, Brown, Brown]</h4> |
| ![121 Ohm]() | 1 |  R18 | <h4>121 Ohm Resistor [Brown, Red, Brown, Black, Brown]</h4> |
| ![243 Ohm]() | 1 |  R19 | <h4>243 Ohm Resistor [Red, Yellow, Orange, Black, Brown]</h4> |
| ![487 Ohm]() | 1 |  R20 | <h4>487 Ohm Resistor [Yellow, Gray, Violet, Black, Brown]</h4> |
| ![976 Ohm]() | 1 |  R21 | <h4>976 Ohm Resistor [White, Violet, Blue, Black, Brown.]</h4> |
| ![Diode]() | 4 |  D1, D2, D3, D4 | <h4>1N4148 Signal Diode</h4> Diodes have polarity, ie. they must be inserted the correct way around to function properly. |
| ![100 nF Capacitor](./parts/CAP_104.png) | 7 |  C1, C6, C7, C10, C11, C12, C15 | <h4>100 nF (104) MLC Capacitor</h4> |
| ![1 uF Capacitor](./parts/CAP_105.png) | 1 |  C2 | <h4>1 uF MLC (105) Capacitor</h4> |
| ![100 uF Capacitor](./parts/CAP_100uF.png) | 2 |  C3, C13 | <h4>100 uF Electrolytic Capacitor</h4> Electrolytic capacitors have polarity, ie. they must be inserted the correct way around to function properly.|
| ![22 uF Capacitor](./parts/CAP_22uF.png) | 1 |  C4 | <h4>22 uF Electrolytic Capacitor</h4> Electrolytic capacitors have polarity, ie. they must be inserted the correct way around to function properly.|
| ![10 uF Capacitor](./parts/CAP_10uF.png) | 2 |  C5, C14 | <h4>10 uF Electrolytic Capacitor</h4> Electrolytic capacitors have polarity, ie. they must be inserted the correct way around to function properly.|
| ![S8050](./parts/S8050.png) | 1 |  Q1 | <h4>S8050 NPN Transistor TO-92</h4> |
| ![Tactile Switch]() | 2 |  Prog, Reset | <h4>Tactile Push Button Switch SPST</h4> |
| ![Buzzer](./parts/Buzzer.png) | 1 |  Bell | <h4>Buzzer 12.2mm dia.</h4> The Buzzer is polarized, ie. it must be inserted the correct way around to function. +VE to the Square Pad |
| ![74HC165](./parts/74HC165.png) | 1 | U4 | <h4>74HC165</h4> Shift Register 8-bit, parallel load |
| ![MCP3008]() | 1 | U6 | <h4>MCP3008</h4> 8 Channel 10-bit Analog-to-Digital Converter (ADC)|
| ![74HC138]() | 1 | U7 | <h4>74HC138</h4> 3-to-8 line Decoder/Demultiplexer, inverting |
| ![74HC595](./parts/74HC595.png) | 1 | U8 | <h4>74HC595</h4> 8-bit serial in/out Shift Register 3-State Outputs |
| ![LM7805]() | 1 | LM7805 U9 | <h4>LM7805 Linear Regulator</h4> |

### Through Hole (THT) headers

| Part | Quantity | PCB | Description |
| ---- | --------:| --- | ----------- |
| ![Header 2pin](./parts/CNX_2RA.png) | 1 |  JP1 5V Pwr | <h4>2 Pin Header - Horizontal</h4> |
| ![Header 6pin]() | 1 |  FTDI Program | <h4>6 Pin Header - Vertical</h4> |
| ![Header 6pin]() | 1 |  Keyboard | <h4>6 Pin Header - Vertical</h4> Only required if using the USB-HID keyboard |
| ![Header 4x2 Male](./parts/CNX_4X2.png) | 1 |  Patch | <h4>8 Pin Header (4x2)- Vertical</h4> See notes for use of this header |
| ![Header 8x2 Female]() | 1 |  S-132 | <h4>16 Pin Header (8x2)- Female, Vertical</h4> Fit to the **underside** of the PCB - attaches to the IMSAI8080/Cromemco Z-1 |
| ![Header 2pin]() | 1 |  KB Reset | <h4>2 Pin Header - Vertical</h4> Only required if using the USB-HID keyboard |
| ![Shunt](./parts/SHUNT.png) | 6 |  For JP1 & Patch as required | <h4>Header Pin Shunts</h4> |
| ![Connector 20x1 Female](./parts/Header_20x1_Female.png) | 2 | not marked | <h4>Connector 20x1 Female</h4> Sits between the DIP-16 IC sockets. These two connectors form a 40-pin socket for the D+7AIO |

### Through Hole (THT) connectors

| Part | Quantity | PCB | Description |
| ---- | --------:| --- | ----------- |
| ![VGA DB15](./parts/VGA_SOCKET.png) | 1 |  VGA | <h4>DB15 VGA Female Socket - Right Angled</h4> |
| ![PS2 KBD](./parts/PS2_SOCKET.png) | 1 |  PS/2 | <h4>Mini-DIN-6 PS/2 Keyboard Female Socket - Right Angled</h4>  Only required if using the PS/2 keyboard |
| ![Power]() | 1 |  Power | <h4>6.2mm DC Barrel Jack Connector</h4> |
| ![16pin DIP Socket](./parts/16pin_DIP_Socket.png) | 4 | (U4, U6, U7, U8) | <h4>16 pin DIP Socket</h4> One for each IC - U4, U6, U7, U8 |

### Printed Circuit Board (PCB)

| Part | Quantity | Description |
| ---- | --------:| ----------- |
| ![PCB Front]() | 1 | <h4>Front view</h4> |

## Mounting hardware

| Part | Quantity | Description |
| ---- | --------:| ----------- |
| ![M4x10 Hex Socket Screw](./parts/M4x30_Hex_Socket_Screw.png) | 1 | <h4>M4x10mm Hex Socket Screw</h4> The M4 socket screw is used to fix the S-132 to the clear acrylic back of the IMSAI80080/Cromemco Z-1. You will need to tap or drill a hole to secure the M4 socket screw. |
| ![M4 Hex Nut]() | 1 | <h4>M4 Hex Nut Nylon</h4> The nut can be used as a spacer between the S-132 PCB and the acrylic back of the IMSAI80080/Cromemco Z-1 |
| ![M3x5 Machine Screw]() | 1 | <h4>M3x5mm Zinc Machine Screw & Washer</h4> The M3 machine screw, washer and nut are used to secure the LM7805 to the S-132 PCB, to aide thermal conduction with the PCB. |
| ![M3 Nut](./parts/M3_Nut.png) | 1 | | <h4>M3 Nut</h4> |

## Joystick Adapter (yellow)

| Part | Quantity | PCB | Description |
| ---- | --------:| --- | ----------- |
| ![Header 40pin](./parts/CNX_40X2RA.png) | 1 |  Pin 1 | <h4>40 Pin Header (20x2)- Horizontal</h4> Fit to underside of PCB. |
| ![Header 4x2 Male](./parts/CNX_4X2.png) | 2 |  Pad 1, Pad 2 | <h4>8 Pin Header (4x2)- Horizontal</h4> Fit to top of PCB. |
| ![10K Ohm]() | 8 |  R#### - #### | <h4>10K Ohm Resistor [Brown, Black, Orange, Gold]</h4> |


| Part | Quantity | Description |
| ---- | --------:| ----------- |
| ![PCB Front]() | 1 | <h4>Front view</h4> |

## JS-1 Analog Joystick (yellow x 2)

| Part | Quantity | PCB | Description |
| ---- | --------:| --- | ----------- |
| ![Tactile Switch]() | 4 each |  SW1 - 4 | <h4>Tactile Push Button Switch SPST</h4> |
| ![Analog Joystick]() | 1 each |  | <h4>2-axis Analog Joystick - 10Kohm</h4> |
| ![Header 4x2 Male](./parts/CNX_4X2.png) | 1 each |  | <h4>8 Pin Header (4x2)- Horizontal</h4> Fit to top of PCB. |

| Part | Quantity | Description |
| ---- | --------:| ----------- |
| ![PCB Front]() | 2 | <h4>Front view</h4> |

## Parallel Printer (red)

| Part | Quantity | PCB | Description |
| ---- | --------:| --- | ----------- |
| ![Header 40pin](./parts/CNX_40X2RA.png) | 1 |  Pin 1 | <h4>40 Pin Header (20x2)- Horizontal</h4> Fit to underside of PCB. |
| ![DB25]() | 1 |  Printer | <h4>DB25 Female Socket - Solder lug</h4> |

| Part | Quantity | Description |
| ---- | --------:| ----------- |
| ![PCB Front]() | 1* | <h4>Front view</h4> |

## Prototype Adapter (green)

| Part | Quantity | PCB | Description |
| ---- | --------:| --- | ----------- |
| ![Header 40pin](./parts/CNX_40X2RA.png) | 1 |  Pin 1 | <h4>40 Pin Header (20x2)- Horizontal</h4> Fit to underside of PCB. |

| Part | Quantity | Description |
| ---- | --------:| ----------- |
| ![PCB Front]() | 1* | <h4>Front view</h4> |