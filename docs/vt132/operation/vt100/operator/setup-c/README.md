---
sidebar: auto
---

# SET-UP C - Code Pages, ANSI colours, System Information *(enhancement)*

## Background

The `SET-UP C` screen is an enhancement that the VT132 adds to the original VT100 functionality.

The VT132 implements 16 colour support and multiple font/codepage support and these features are accessible and configurable through the`SET-UP C` screen.

![SET-UP-C](./SetupC.jpg)

In addition to the enhanced features configurable through this screen, it also displays some useful information about the VT132 including:

- firmware version details
- credit to the FabGL library on which it is built
- screen resolutions
- memory utilization

## Help

The integrated help screen is accessible by pressing the `F1` key as with the other SET-UP screens, provides a summary of the features that are configurable on this screen.

![SET-UP-C-HELP](./SetupC_help.jpg)

## Codepage Support

Pressing `2` on the keyboard toggles between the three available codepages.

### DEC VT100/VT220 ROM Code Page

The default Codepage/Font shown in the previous screen images is derived from original DEC VT100 and VT220 ROMs.

- Characters from 0x00 to 0x7F are from the VT100 character ROM and include the standard [7-bit ASCII](https://en.wikipedia.org/wiki/ASCII#Character_set) character set and the [DEC Special Graphics](https://en.wikipedia.org/wiki/DEC_Special_Graphics) character set.
- Characters from 0x80 to 0xFF are from the VT220 character ROM and implement the upper half (non-ASCII) of the [DEC Multinational Character Set (MCS)](https://en.wikipedia.org/wiki/Multinational_Character_Set)

::: tip

This codepage is also available in 132 column mode.
:::

### PC Code Page 437

The alternate Codepage/Font [CP437](https://en.wikipedia.org/wiki/Code_page_437), also known as the VGA/ANSI character set from the MS-DOS era, is shown here.

![SET-UP-C-CP437](./SetupC_cp437.jpg)

The main purpose of providing [CP437](#pc-code-page-437) support is to allow visiting BBS systems that render menus and ASCII art expecting an ANSI terminal with VGA font support. You may find other uses but for general use this font is not as clear as the [DEC fonts](#dec-vt100-vt220-rom-code-page).

::: tip

When CP437 is selected as the current font, rendering characters from the **DEC Special Graphics** character set will still work as they are automatically mapped to corresponding characters in the CP437 font.
:::

::: warning

This codepage **is not available** in 132 column mode.
:::

### DEC VT220/Latin-1 Code Page

The successor to the **DEC Multinational Character Set**, this code page also known as [ISO-8859-1](https://en.wikipedia.org/wiki/ISO/IEC_8859-1) was the most commonly used code page prior to the adoption of [Unicode](https://en.wikipedia.org/wiki/Unicode) and is shown here.

![SET-UP-C-LATIN-1](./SetupC_latin1.jpg)

Available for both 80 and 132 column modes.

The main purpose of providing [Latin-1](#dec-vt220-latin-1-code-page) codepage support is if you are connecting to a modern operating system and want an accurate, contemporary codepage.

::: warning
If **DEC VT220/Latin-1** is currently selected, any reset event or change of font/lines/columns etc... returns to **DEC VT100/VT220 ROM** codepage

This setting is is not currently saved in NVR
:::
## 24/25/30 Line Support

Pressing `3` on the keyboard toggles between 24, 25 & 30 line support. There is a noticeable delay while the VGA signal re-syncs with the changed viewport resolution.

The original VT100 supported 24 lines of text. With the introduction of the IBM PC a 25 line display became the norm.

The main purpose of providing 25 line support is to allow visiting BBS systems that render menus and ASCII art expecting an ANSI terminal with 25 line support.

When 25 line support is selected, the details on the `SET-UP C` screen change as follows:

![SET-UP-C-25Line](./SetupC_25line.jpg)

The maximum viewport resolution of the VT132 is 800x300. At this vertical resolution, 30 lines of text can be displayed. This can be useful for displaying more text on the screen for working at the operating system (CP/M) prompt, programming in Basic or working with a range of full screen applications such as WordStar or SuperCalc2.

::: tip
Full screen applications such as WordStar or SuperCalc2 typically must be configured using their accompanying install/setup program to work with the increased number of rows.

SuperCalc2 works well at 132 columns by 30 rows.
:::

When 30 line support is selected, the details on the `SET-UP C` screen change as follows:

![SET-UP-C-30Line](./SetupC_30line.jpg)

::: tip
25 and 30 line support is also available in 132 column mode.
:::

::: warning
If Wi-FI has been started from the modem, then 30 line mode **will not** be selectable and this setting will only toggle between 24 and 25 line modes.

To re-enable 30 line mode you must H/W Reset or Reboot the VT132 and ensure Wi-Fi is not started from the modem.
:::

## ANSI/VGA Palette Support

Pressing `6` on the keyboard toggles between standard ANSI and VGA colour palettes. The colour changes are only subtle and effect only a few colours.

With the introduction of colour the ANSI escape codes for [SGR (Select Graphic Rendition)](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_parameters) were extended to cater for colour.

The VT132 implements 4 bit colour providing for 16 possible colours.

The standard ANSI colours are represented under the heading "Windows Console" in this [4 bit ANSI colour table](https://en.wikipedia.org/wiki/ANSI_escape_code#3/4_bit). The VGA text colours were slightly different and are shown under the heading "VGA' in the same table.

The main purpose of providing VGA colour palette support is to allow visiting BBS systems that render menus and ASCII art to be viewed with better colour accuracy. The most noticeable change is that the ANSI palette **dark yellow** becomes **brown** in the VGA palette. 

When the VGA colour palette is selected, the `SET-UP C` screen change as follows:

![SET-UP-C-VGA](./SetupC_vga.jpg)

## Setting Default Foreground and Background Colours

Pressing `7` on the keyboard sets the default foreground colour based on the current cursor position.

Pressing `8` on the keyboard sets the default background colour based on the current cursor position.

Moving the cursor left or right with the `<left>` and `<right>` cursor control keys, `<tab>` or `<cr>` enables you to choose the colour you want to apply.

The current default foreground and background colour combination is displayed by the word `Default` on the last line of the screen.

The ANSI escape codes for [SGR (Select Graphic Rendition)](https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_parameters) allow a default foreground and background colour to be specified, in addition to selecting specific colours on demand. When no specific colour attributes are in effect the default foreground and background colours are used.

This feature of the VT132 lets you manually select your preferred default foreground and background colours.

This way you can make the VT132 appear as a green, amber , white (default) or blue phosphor terminal, or any other colour combination that you prefer.

### Showing the currently loaded DECDLD / DRCS soft font

Pressing `9` on the keyboard changes the codepage to display the presently loaded soft soft and its **Dscs**

The example below shows the DEC APL soft font loaded from a file sourced from the VAX VMS system disks.

![SET-UP-C-DRCS](./SetupC_drcs.jpg)


The first row of glyphs does not belong to the soft font, but are the glyphs used to represent characters in **C0** when DEC CRM is enabled.

Any glyphs that are not loaded from a **Down-Line-Loadable Character Set** are shown with a *reverse question mark* - **⸮**

The **Dscs** (character set name) for the soft font, 1 to 3 characters, sprecified by the soft font definition is shown between **square brackets** in the inverse title above the character set. **Dscs=[ @]** in the example above.

::: tip
The use of soft fonts is beyond the scope of these notes, you should consult the [VT220 Programmers Guide - Chapter 4](https://vt100.net/docs/vt220-rm/chapter4.html#S4.16) for details. 
:::

## SET-UP C - advance to next setup screen

On the `SET-UP C` screen, pressing `5` will advance to the [`SET-UP D`](../setup-d/) screen, before returning to the `SET-UP A` screen.
