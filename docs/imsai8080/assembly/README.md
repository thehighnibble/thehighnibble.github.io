---
sidebar: auto
---

# Step-by-step Assembly Guide (Draft)

## Notices

::: tip
**Please read all the following notices and instructions before assembling the IMSAI 8080esp replica kit.**
:::

::: warning
This kit contains cut acrylic.
Cut acrylic can have sharp edges that can in turn cut. As a precaution, wear cotton gloves to protect your hands while handling the cut acrylic.
:::

::: danger CAUTION
This kit contains many small parts that may be a choking hazard and is not suitable for children. Keep the contents of this kit away from children to avoid choking.
:::

::: tip NOTE
This kit is for hobby and educational interest only. The simulated replica computer you will build should not be used for any other purpose and cannot be expected to work reliably beyond a demonstration of the simulated computer.
:::

::: tip
Keep the box the IMSAI 8080esp replica kit shipped in. This custom made box was designed to both ship the unassembled kit and also to house the assembled replica. It is the best box you can use if you need to store or transport your finished IMSAI 8080esp.
:::

::: tip
Keep one of the full sheets of cardboard from above or below the components. This will serve as a tool to help with the assembly of the kit, especially for retaining the M4 bolts in the correct position while assembling all the layers of acrylic and the PCB together. It maybe useful to you in future if you ever need to disassemble and reassemble the IMSAI 8080esp.
:::

::: warning Notes on the PCB

- There is no resistor R15, it was removed from the design long ago and the resistors were never renumbered
- There are 2 silk screen errors on the PCB (v3.4.1, fixed on v3.4.2):
    1. the LED LA14 is incorrectly labeled as LS14
    2. the LED LD0 is labeled on the left of the LED and should be labeled above as per LD1-LD7
- There is a 5x2 group of through-holes marked **Spare** that nothing gets soldered into
- There are two groups of 8x1 through-holes that are unmarked (one above LRN1 and one below RN1) that nothing gets soldered into
:::

::: tip Note
This step-by-step assembly guide refers to the **front** and **back** of the PCB as follows:

- the **front** of the PCB has the silkscreen for the LEDs and the toggle switches
- the **back** of the PCB has the silkscreen of the IMSAI 8080 Microcomputer System decal and The High Nibble logo
:::

::: tip
There is a [play list of videos on YouTube](https://www.youtube.com/playlist?list=PLADkYVZqAxdOlpkLc3HC-EbbttXevZ3-B) that demonstrate this step-by-step assembly sequence and includes additional tips for successful assembly.
:::

## Unpacking and checking against the BOM

::: tip
Please unpack the entire kit and perform a stock take of what you have received against the [Bill-of-Materials](../bom/).
:::

::: warning
If you believe you are missing any components when you compare the kit contents with the [Bill-of-Materials](../bom/) please contact me directly by email to [info@thehighnibble.com](mailto:info@thehighnibble.com).

Please respect that this kit is a hobby project made by an individual maker and not a mass produced product from a manufacturer. While every care was taken to pack each kit correctly, mistakes may have occurred.
:::

::: danger DAMAGE
If your kit arrived in a damaged state, or if upon opening the kit you find any of the contents to be damaged, please take photographs of the damage and include them in your email.
:::

::: tip
I will happily work with you directly, via email, to resolve the issues with your incomplete or damaged kit.
This may require mailing replacement parts to you and that will take time, so please have patience.
:::

## PCB & Soldering

### ESP32 Microcontroller, PSRAM & micro SD Card Socket

| Step | Parts | Location | Notes |
| ---: | ----- | -------- | ----- |
| 1. |  Header 20x1 Male | ESP32-PICO-KIT board | Before soldering anything to the main circuit board, it's first necessary to solder some pins to the ESP32-PICO-KIT board. Cut 2 sets of 3 pins from the 20x1 Male Header strip. Solder these into the unpopulated through-holes on the ESP32-PICO-KIT board. Upon completion there should be 20 pins along each edge of the underside of the ESP32-PICO-KIT board. |
| 2. | PSRAM (SMD) | `U13` front | *Note: Pin 1 is indicated on the PCB by a white dot and on the component by a dimple in the plastic case*. When done, perform a continuity test with a multimeter from each pin of the SOP-8 package to a connected pad on the PCB (see video, details to follow) |
| 3. | microSD Card Socket (SMD) | `uSD Card` front | The microSD Card Socket is also soldered to the **front** of the circuit board. Align the two locating pins on the microSD Card Socket with the two holes in the PCB. Solder the 4 large ground pads of the lid first ensuring the 9 smaller leads are well aligned, then solder the 9 smaller leads. |
| 4. | Resistor 10K Ohm | `R14` front | There are 15 10K resistors in this kit (including 1 spare), and they are colour-coded Brown, Black, Orange, Gold. The resistors are tight fitting, so bend the leads close to the their body before inserting into location. Resistors are not polarized, and can be soldered in either orientation. |
| 5. | Capacitor 100nF | `C1` front | There is only one type of capacitor in this kit, and they can be soldered in either orientation. |
| 6. | Resistor Network 6x10K Ohm | `RN1` back | *Note: Pin 1 is indicated on the PCB by the square pad and on the component by a white dot*|
| 7. | Connector 20x1 Female (x2) | `ESP32` back | Solder these connectors mounted on the **back** of the PCB in the 2 rows of 20 through-holes that form a DIP40 outline marked `ESP32`. |
| 8. | ESP32-PICO-KIT, microSD Memory Card | **[TEST STEP]** | Plug the ESP32-PICO-KIT into the female connectors on the **back** of the PCB. *Note: The USB connecter should be towards the near edge of the PCB and the WiFi antenna towards the RS232 connector mounting holes.* Insert the microSD card. Connect the ESP32-PICO-KIT to a PC with a suitable USB cable. Run a terminal emulator (e.g. PuTTY on Windows, or iTerm2, Serial on Mac) at 115200 baud 8N1 connected to the TTY/COM port that the ESP32-PICO-KIT presents and observe the boot logs. Errors with either the PSRAM or the microSD card will indicate soldering mistakes (see the [During Assembly](../troubleshooting/#during-assembly) section in the Troubleshooting guide for details) |

::: tip
If you do not see a TTY/COM port on your PC presented by the ESP32-PICO-KIT, you may need to install a driver for the *Silicon Labs CP210x USB to UART bridge* used on the ESP32-PICO-KIT. See [Serial Communications (RS232, USB)](../configure/#serial-communications-rs232-usb) in the Configuration guide for details.
:::

::: danger
Before continuing, remove both the microSD Memory Card from the socket and the ESP32-PICO-KIT from the female connectors, **taking care not to bend the Wi-Fi antenna.**
:::

### LEDs and accompanying Resistors

::: tip
The LEDs and accompanying Resistors should be soldered in groups of 8 as indicated below and each group of 8 tested before proceeding to the next group.
:::

::: tip
Use the supplied black acrylic spacer and alignment tools. Tape them in place with the LEDs before you solder to help achieve the  alignment of each group of 8 LEDs.

- My preference is to raise the LEDs 3mm off the PCB, the black acrylic spacer with 8 open vertical slots enables this. You can, however, solder the LEDs sitting flush with the PCB.
- The black acrylic alignment tool with 8 round holes should always be used to help align 8 LEDs at a time to be in alignment. Peel any covering off the alignment tool before using it.

(see video, details to follow)
:::

::: danger
LEDs are polarized and must be soldered in the correct orientation. The cathode (short lead, nearest the flat edge) should be soldered in the **square**, lower, though-hole pad. The anode (long lead) should be soldered in the **round**, upper, though-hole pad. Check the orientation of all LEDs in each group of 8 before soldering into place by visually inspecting the flat edge corresponding with the flat indicated in the silk screen on **front** side of the PCB, and the alignment of the long and short leads on the **back** side of the PCB.
:::

| Step | Parts | Location | Notes |
| ---: | ----- | -------- | ----- |
| 9a. | LED Red 5mm (x8) | `LA8-LA15` front |  *Note: LEDs are polarized and must be soldered in the correct orientation.* Use the acrylic spacer and alignment tools. See notes above. |
| 10a. | Resistor 3K Ohm (x8) | `R32-R39` front | There are 45 3K resistors in this kit (including 1 spare), and they are colour-coded Orange, Black, Red, Gold. Resistors are **not** polarized and can be inserted and soldered either way around. Because of my sense of aesthetic (ok, my OCD) I like to orientate them all the same way according to the coloured bands. |
| 11a. | Test Lead | [TEST STEP] | At this time you should test the group of 8 LEDs you have just soldered into place. Insert the ESP32-PICO-KIT into its socket and connect it to a power source. Using the supplied test lead you can use the +5V provided by the ESP32-PICO-KIT to the PCB to test each LED (see video, details to follow) |

::: danger
Before continuing, remove both the microSD Memory Card from the socket and the ESP32-PICO-KIT from the female connectors, **taking care not to bend the Wi-Fi antenna.**
:::

#### Steps 9-10 can now be repeated for each remaining group of LEDs in the following suggested order

| Step | Parts | Location | Notes |
| ---: | ----- | -------- | ----- |
| 9b. | LED Red 5mm (x8) | `LS0-LS7` front | |
| 10b. | Resistor 3K Ohm (x8) | `R40-R47` front | Orange, Black, Red, Gold |
| 11b. | Test Lead | [TEST STEP] | |
| 9c. | LED Red 5mm (x8) | `LO0-LO7` front | |
| 10c. | Resistor 3K Ohm (x8) | `R16-R23` front | Orange, Black, Red, Gold |
| 11c. | Test Lead | [TEST STEP] | |
| 9d. | LED Red 5mm (x8) | `LA0-LA7` front | |
| 10d. | Resistor 3K Ohm (x8) | `R24-R31` front | Orange, Black, Red, Gold |
| 11d. | Test Lead | [TEST STEP] | |
| 9e. | LED Red 5mm (x8) | `LD0-LD7` front | |
| 10e. | Resistor 3K Ohm (x8) | `R52-R59` front | Orange, Black, Red, Gold |
| 11e. | Test Lead | [TEST STEP] | |
| 9f. | LED Red 5mm (x4) | `LHT1, LWT1, LRN1, LIE1` front | |
| 10f. | Resistor 3K Ohm (x4) | `R48-R51` front | Orange, Black, Red, Gold |
| 11f. | Test Lead | [TEST STEP] | |

### Other Resistors, Capacitors, IC sockets & Miscellaneous Parts

::: warning Note
The transistor `Q1` and the accompanying Resistor `R13` are **optional**. They are a convenience for flashing new firmware on the ESP32-PICO-KIT over USB without removing it from the IMSAI 8080esp PCB. However, on their own they do not provide the whole solution and two extra jumper wires are required to be directly soldered to component leads on the ESP32-PICO-KIT board (details to follow). The simple alternative is to remove the ESP32-PICO-KIT  from the IMSAI 8080esp PCB before flashing new firmware over USB, or more simply use the drag-and-drop, over-the-air (OTA) firmware update procedure via the Desktop UI (details to follow).
:::

| Step | Parts | Location | Notes |
| ---: | ----- | -------- | ----- |
| 12. | Resistor 10K Ohm | `R1-R12` front | Brown, Black, Orange, Gold. Resistors are **not** polarized and can be inserted & soldered either way around. Because of my sense of aesthetic (ok, my OCD) I like to orientate them all the same way according to the coloured bands. |
| 13. | Resistor 10K Ohm | `R13` back | *(Optional) See note above.* Brown, Black, Orange, Gold. |
| 14. | Capacitor 100nF (0.1μF, 104) | `C3-C12, C17` front | These capacitors are **not** polarized and can be inserted & soldered either way around. |
| 15. | Capacitor 100nF (0.1μF, 104) | `C2, C13-C16` back | These capacitors are **not** polarized and can be inserted & soldered either way around. |
| 16. | 16 pin DIP Socket (x10) | `U1-U10` front | DIP sockets should be inserted to align the crescent/indent at one end with the corresponding mark in the silk screen for the IC Socket. This makes no difference functionally, but will help with the inserting the ICs with the correct orientation later in the assembly. |
| 17. | 16 pin DIP Socket | `U11` back | DIP sockets should be inserted to align the crescent/indent at one end with the corresponding mark in the silk screen for the IC Socket. This makes no difference functionally, but will help when inserting the ICs with the correct orientation later in the assembly. |
| 18. | S8050 NPN Transistor| `Q1` back | *(Optional) See note above.* |
| 19. | Tactile Switch SPST-NO | `Reset` front | *Note: don't rely only on the 2 soldered connector pins to secure the switch to the PCB, also solder in the 2 mounting pegs to ensure a secure connection to the PCB* |
| 20. | Header 4x2 Male | `Boot` back | |
| 21. | Header 8x2 Male | `Patch` back | |
| 22. | Header 8x2 Male | `Comms` back | |
| 23. | DE9 (DB9) Male Socket (x2) | `RS232-1, RS232-2` back | *Note: don't rely only on the 9 soldered connector pins to secure a socket to the PCB, also solder in the 2 mounting pegs to ensure a secure connection to the PCB* |

### Inserting the ICs

::: danger
If you fail to insert the ICs at this step, before proceeding to insert and solder the rocker/toggle switches, you will find that you cannot later insert some of the ICs without bending the switches. I have done this, to prove that it can be done, but I do not recommend it.
:::

::: danger
**ICs are polarized/directional and must be inserted in the correct orientation.** ICs should be inserted to align the crescent/indent at one end with the corresponding mark in the silk screen. If you have soldered in the **16 pin DIP Sockets** with the indicated orientation, this will make the job easier. Once you have inserted the ICs, have a cup of tea and then double-check they are in the correct way: it's easy to accidentally insert them the wrong way round.
:::

| Step | Parts | Location | Notes |
| ---: | ----- | -------- | ----- |
| 24. | 74HC595 (x6) | `U1-U6` front | `U1-U6` are all oriented the same way, with the crescent/indent to the **right** when looking at the **front** of the PCB. Take time to check you are putting the ICs in the correct sockets, as U6 might not be where you expect it to be. |
| 25. | 74HC165 (x4) | `U7-U10` front | `U7-U10` are all oriented the same way, with the crescent/indent to the **right** when looking at the **front** of the PCB. |
| 26. | MAX3232 | `U11` back | `U11` is oriented with the crescent/indent to the **left** when looking at the **back** of the PCB. |

## Testing I

::: tip
At this point you can operate the IMSAI 8080esp without having the rocker/toggle switches mounted.

- Plug the ESP32-PICO-KIT into the female connectors on the **back** of the PCB.
- *Note: The USB connecter should be towards the near edge of the PCB and the WiFi antenna towards the RS232 connectors.*
- Insert the microSD card.
- Connect the ESP32-PICO-KIT to a USB power source with a suitable USB cable.
- The simulation will not start until you short the centre and top pins of switch `S1`

You can connect to the web based desktop UI by connecting a PC to the Wi-Fi SSID advertised as `IMSAI8080`. Because the Wi-Fi has not been configured, the IMSAI 8080esp should have rebooted into Wi-Fi fallback mode, where it acts as an **Access-Point (AP)** with the default SSID of `IMSAI8080`. Once you are connected to this Wi-Fi network, start a Chrome browser and enter the URL `http://imsai8080.local`.

There are (or will be) separate instructions for configuring the Wi-Fi to connect to you local Wi-Fi network.

You can use the virtual `CPA:` device to toggle the `RUN/STOP` switch.
:::

::: warning
While you can operate the IMSAI 8080esp at this point, it will not do much for you without some further configuration. The default configuration is like an empty machine with no ROM only RAM, and you don't have a full front panel to play with. Damn!
Configuration is (or will be) covered elsewhere.
:::

::: tip
Time for a cup of tea if you've gotten this far.
:::

## Rocker/Toggle Switches

::: tip
To correctly locate and align the rocker switches before soldering, the front panel should be partially assembled according to the following instructions.
:::

::: tip
Many of the sheets of acrylic have a protective backing cover (plastic or paper) to protect them from scratching during cutting and transportation. This should be removed before you use them in the assembly of the kit.
:::

::: tip
When assembling all or part of the front panel it is sometimes necessary to flip the assembly. To avoid having the M4 socket screws fall out you can use masking tape to hold them in place, or use a cardboard sheet from the packaging to cover the socket screws while flipping the assembly (see video).
:::

::: warning
When screwing the M4 Nylon Nuts and the M4 Socket Screws together only ever make them **finger tight** to avoid stripping the thread from the M4 Nylon Nuts.
:::

| Step | Parts | Location | Notes |
| ---: | ----- | -------- | ----- |
| 27. | M4x30mm Hex Socket Screw (x8) | 3mm Black acrylic LED/switch masking plate | Insert the 8 `M4 socket screws` into each of the 8 round holes in the large `3mm Black acrylic LED/switch masking plate` |
| 28. | Spacer 9mm Nylon (x8) | | Thread a `9mm spacer` over each of the 8 `M4 socket screws` behind the `3mm Black acrylic LED/switch masking plate` |
| 29. | PCB | | Fit the `PCB` over the 8 `M4 socket screws` behind the `9mm spacers` and the `3mm Black acrylic LED/switch masking plate` |
| 30. | M4 Hex Nut Nylon (x8) | | Secure this partial assembly of the front panel by screwing a `M4 Nut` on each of the 8 `M4 socket screws` behind the `PCB` |

:::  tip
You should now have a sandwich with the PCB at the back and the 3mm Black acrylic LED/switch masking plate at the front, separated by the 9mm spacers and held together with the M4 socket screws and nuts.
:::

::: tip
As you insert each rocker switch into the PCB, there should be a slight press-to-fit resistance from the pins as they push into the through-holes in the PCB. This will help hold the switch in position prior to soldering.
:::

| Step | Parts | Location | Notes |
| ---: | ----- | -------- | ----- |
| 31a. | Blue Rocker (On-On) (x4)| `SA12-SA15` | **Don't solder them yet** |
| 32a. | Red Rocker (On-On) (x4)| `SA8-SA11` | **Don't solder them yet** |
| 33a. | 3mm Black acrylic LED spacer & switch alignment guide (8 slots) | `SA8-SA15` | Place the small acrylic alignment guide over the ends of the whole set of 8 rocker switch toggles/actuators, this should help get the switches in alignment. Secure this in place with tape of a couple of strong elastic bands. Solder the switches in place. |

#### Steps 27-29 can now be repeated for the second group of (On-On) switches

| Step | Parts | Location | Notes |
| ---: | ----- | -------- | ----- |
| 31b. | Blue Rocker (On-On) (x4)| `SA4-SA7` | |
| 32b. | Red Rocker (On-On) (x4)| `SA0-SA3` |  |
| 33b. | 3mm Black acrylic LED spacer & switch alignment guide (8 slots) | `SA0-SA7` | |

::: warning
The order of the momentary switches is different. They alternate blue/red from left to right with the red power switch in the right-most position. I have seen different configurations and I guess it comes down to personal choice. I imagine you can swap the plastic toggle actuators but I have not tried this myself.
:::

| Step | Parts | Location | Notes |
| ---: | ----- | -------- | ----- |
| 34. | Blue Rocker (Mom-off-Mom) (x3)| `S6, S4, S2` | **Don't solder them yet** |
| 35. | Red Rocker (Mom-off-Mom) (x2)| `S5, S3` | **Don't solder them yet** |
| 36. | 3mm Black acrylic LED spacer & switch alignment guide (8 slots) | `S2-S6` | Place the small acrylic alignment guide over the ends of the whole set of 5 rocker switch toggles/actuators, this should help get the switches in alignment. Secure this in place with tape of a couple of strong elastic bands. Solder the switches in place. |
| 37. | Red Power Switch (On-On) | `S1` | Solder it in place. |

## Testing II

::: tip
At this point the IMSAI 8080esp should be fully operational.
See [Testing I](#testing-i) for a general outline of getting it started.

You should exercise all the switches and make sure they are operating correctly (details to follow)
:::

::: warning
While you can operate the IMSAI 8080esp at this point, it will not boot a disk without further configuration. The default configuration is like an empty machine with no ROM only RAM. You can, however, now enter programs through the front panel switches and run them.
:::

::: tip
Time for another cup of tea if you've gotten this far.
:::

## Full Front Panel Stack

::: warning
Having successfully gotten this far, the next section can go very smoothly if you take care or it can become very fiddly and frustrating if you rush or end up separating the `PCB` and the `3mm Black acrylic LED/switch masking plate`
:::

::: tip

1. Remove the `M4 Nuts` (8) without letting the `M4 Socket Screws` (8) drop out of place, tape may help.
2. Place the `PCB` down on a surface with the `3mm Black acrylic LED/switch masking plate` facing up, the `M4 Socket Screws` will need to slide up to let the `PCB` sit down flat on the surface.
3. Carefully remove the `M4 Socket Screws` (8) without disturbing the `3mm Black acrylic LED/switch masking plate`, the `PCB` **and especially don't allow the `9mm Spacers` to move out of place**.
4. Leave this assembly undisturbed while you put the remaining front panel acrylic together
:::

| Step | Parts | Location | Notes |
| ---: | ----- | -------- | ----- |
| 38. | M4x30mm Hex Socket Screw (x8) | 6mm Clear acrylic front cover | Insert the 8 `M4 socket screws` into each of the 8 round holes in the thick `6mm Clear acrylic front cover`. Tape over the heads to hold them in place. |
| 39. | 1.5mm White text/decals through Black facia | | Align the `Text Facia` over the `M4 socket screws` and slide it down to meet the clear acrylic |
| 40. | 0.8mm Red transparent filter | | Align the `Red transparent filter` over the `M4 socket screws` and slide it down to meet the `Text Facia` |

::: tip

1. Take this whole assembly and flip it over, with the clear acrylic and the `Text Facia` facing up.
2. Lower this into place, guiding the `M4 socket screws` through the holes in the other assembly you previously set aside (black acrylic, 9mm spacers and PCB)
3. Making sure the `M4 socket screws` wont fall out (tape again), flip this whole assembly over, placing the front panel face down on a surface.
:::

::: warning
If by this point, any of the `9mm Spacers` have slipped out of position, you can withdraw the corresponding `M4 socket screw` and use tweezers to correctly  locate the `9mm Spacer` before reinserting the `M4 socket screw`
:::

| Step | Parts | Location | Notes |
| ---: | ----- | -------- | ----- |
| 41. | Spacer 6mm Nylon (x8) | | Thread a `6mm spacer` over each of the 8 `M4 socket screws` behind the `PCB` |
| 42. | 3mm Clear acrylic back cover | | Align the `3mm Clear acrylic back cover` over the `M4 socket screws` and slide it down to meet the `3mm Spacers` |
| 43. | M4 Hex Nut Nylon (x8) | | Push a  `M4 Nut` into each hexagonal cutout in the `3mm Clear acrylic back cover` behind each of the 8 `M4 socket screws`, tape them into position so that they don't fall out while tightening the  `M4 socket screws` |

::: tip

1. Holding the whole assembly firmly together (again tape may help) stand it up on one long edge.
2. Screw each of the 8 `M4 socket screws` firmly into their corresponding `M4 Nut`, take care not to over-tighten and strip the thread in the `M4 Nut`.
:::

::: tip
Almost done!

Who would have thought you'd have a working replica of an IMSAI 8080 in around just 40 simple steps :-)

Probably time for another cup of tea, but in my case, I think I'd choose something stronger.
:::

## Switch Surround

::: tip
Don't try to operate your IMSAI 8080esp for long periods of time without this component in place. It looks so good, you're missing out if you don't have it in place :-).
:::

| Step | Parts | Location | Notes |
| ---: | ----- | -------- | ----- |
| 44. | 120mm x 25mm Black Velcro adhesive backed hook & loop tape |  | Cut both the `hook and loop tape` into **2** x 60mm lengths. Cut each 60mm piece **lengthways in half** to produce **4** x 60mm x 12.5mm strips of `hook and loop tape` |
| 45. | 60mm x 12.5mm Black Velcro adhesive backed hook & loop tape (x4) | 6mm Charcoal grey hammer tone painted acrylic switch surround |  Stick each strip of `hook and loop tape` to the back of the `switch surround` vertically , aligned behind the fingers extending upwards along the `switch surround` |
| 46. | 6mm Charcoal grey hammer tone painted acrylic switch surround | |  Remove the paper backing from the `hook and loop tape` and press the `switch surround` into place under the `toggle switches` on the assembly you completed after Step 43. |

## The Lid

::: tip
The lid can wait, its time to play!
:::

| Step | Parts | Location | Notes |
| ---: | ----- | -------- | ----- |
| 47. | M3x12mm Black Machine Screw (x4), M3 Nut (x4) | 3mm Blue acrylic lid | Put an `M3 Screw` through each of the 4 smaller holes in the `Blue acrylic lid` and screw a `M3 Nut` on the end of each `M3 Screw`. |
| 48. | 3mm Blue acrylic lid | | Place the `Blue acrylic lid` around the assembly completed at step 38 above. The `M3 Screws` are closer to the **back** than to the front. Work each `M3 Screw` & `M3 Nut` into the corresponding slot in the `3mm Clear acrylic back cover`. Tighten the `M3 Screws` in turn to secure the lid.

## Celebrating

::: tip
Once that last "cup-of-tea" has had the desired calming effect...

The most appropriate way to celebrate is to toggle in and run your first program.

1. Remember to once again plug in the `ESP32-PICO-KIT` and insert the `microSD Card`
2. Connect the `ESP32-PICO-KIT` to a USB power source with a USB micro-B cable
3. Go and download/open your copy of the [IMSAI 8080 Microcomputer System User Manual](http://bit.ly/2UoKnSR) (also included in the manual folder on the microSD card)
4. Find page 34 in the manual and start from the heading **SYSTEM FUNCTIONAL TEST**

Enjoy!
:::

::: tip
To do anything more than toggle programs into a machine with no stored programs in ROM, you will need to understand how to [Configure your IMSAI 8080esp](../configure/) to load ROM images on startup, connect to Wi-Fi to access the Desktop UI, etc...
:::
