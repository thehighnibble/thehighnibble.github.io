---
sidebar: auto
---

# VT100 (enhanced) Programmer Information (Draft)

## Background

The VT132 faithfully implements almost all of the features of the original Digital Equipment Corporation (DEC) VT100, with the Advanced Video Option installed.

To this a range of enhancements have been added

- many are features of later DEC VT family terminals that have been implemented for convenience
- some are features of "standard" ANSI terminals (mainly IBM PC/MS DOS based terminal emulators)
- enhancements are highlighted by the addition of *(enhancement)* to the heading or description

A good reference for an owner of a VT100 (especially getting started with the Setup screens) is the original [VT100 Users Guide](https://vt100.net/docs/vt100-ug/contents.html) over at [VT100.net](https://vt100.net/). Details of what the [Advanced Video Option](https://vt100.net/docs/vt100-ug/chapter4.html#S4.1) adds can be found here also.

The remainder of this section will largely focus on where the VT132 implementation of the VT100 differs to an original VT100.

:::tip
Each heading is a link to the corresponding section of Chapter 3 of the original VT100 Users Guide
:::

## [The Keyboard](https://www.vt100.net/docs/vt100-ug/chapter3.html#S3.1)

### LED Indicators

The original VT100 keyboard had 7 LED indicators, the VT132 does not.

On the VT132:

- The *ON-LINE/LOCAL* status is indicated on each **Setup screen** in the top right-hand corner as either `ONLINE` or `LOCAL` and also in the **Quick Menu**, on the root menu, by the checkbox item  `[X]On-line` for *ON-LINE* and `[ ]On-line` for *LOCAL*.
- There is no support for the "keyboard locked" condition.
- The four remaining, programmable LEDs are represented as follows:
  - L1, L2 and L3 are mapped to the 3 PC keyboard LEDs for `<Num Lock>`, `<Caps Lock>` and `<Scroll Lock>` (if present)
    - Sending an escape sequence to turn on/off any of L1, L2 or L3 will change the corresponding LED on the keyboard
    - Pressing one of the 3 key-lock keys `<Num Lock>`, `<Caps Lock>` and `<Scroll Lock>` will override the value displayed for L1, L2 or L3
  - L4 is not mapped to anything is so is not visible

### SET-UP

The `SET-UP` key is mapped to `<Alt><SysReq>` or `<Alt><PrintScreen>`

### NO SCROLL

The `NO SCROLL` key is mapped to the `<Scroll Lock>` key on a PC keyboard and is equivalent to pressing `<Ctrl><S>` and `<Ctrl><Q>` alternatively.

### BREAK

The `BREAK` key function **is not implemented** by the VT132.

## [Communications Protocols](https://www.vt100.net/docs/vt100-ug/chapter3.html#S3.2)

### Full Duplex

The VT132 supports baud rates from 300 to 115200 and the Transmit and Receive speed must be the same. The available speeds are `300, 1200, 2400, 4800, 9600, 19200, 38400, 57600, 115200` corresponding to the speeds supported by most RC2014 serial interface cards based on the available clock settings.

## [Terminal Control Commands](https://www.vt100.net/docs/vt100-ug/chapter3.html#S3.3)

### Control Characters

The following table details the control characters the VT132 responds to.

There are two columns indicating whether the control character action is implemented, one for **VT100** mode and one for **ANSI.SYS compliance** mode as the set of control characters differs depending on the current mode.

| Control Character | Octal Code | Hex Code | Action Taken | VT100 | ANSI.SYS |
| ----------------- | -----------| -------- | ------------ | ----- | -------- |
| NUL | 000 | 0x00 | Ignored on input | No  | No  |
| ENQ | 005 | 0x05 | Transmit answer-back message | Yes | No  |
| BEL | 007 | 0x07 | Sound bell tone from buzzer | Yes | Yes |
| BS  | 010 | 0x08 | Move the cursor to the left one character position, unless it is at the left margin, in which case no action occurs | Yes | Yes |
| HT  | 011 | 0x09 | Move the cursor to the next tab stop, or to the right margin if no further tab stops are present on the line | Yes | Yes |
| LF  | 012 | 0x0A | This code causes a line feed or a new line operation. (See new line mode). | Yes | Yes |
| VT  | 013 | 0x0B | Interpreted as **LF** - TBA | Yes | Yes |
| FF  | 014 | 0x0C | Interpreted same as **VT** | Yes | Yes |
| CR  | 015 | 0x0D | Move cursor to the left margin on the current line | Yes | Yes |
| SO  | 016 | 0x0E | Invoke G1 character set, as designated by **SCS** control sequence. | Yes | No |
| SI  | 017 | 0x0F | Select G0 character set, as selected by `ESC (` sequence | Yes | No |
| XON  | 021 | 0x11 | Causes terminal to resume transmission | Yes | Yes |
| XOFF  | 023 | 0x13 | Causes terminal to stop transmitted all codes except **XOFF** and **XON** | Yes | Yes |
| SUB  | 030 | 0x18 | Not implemented | No | No |
| CAN  | 032 | 0x1A | Not implemented | No | No |
| ESC  | 033 | 0x1B | Invokes a control sequence | Yes | Yes |
| DEL  | 177 | 0x7F | Ignored on input | Yes | Yes |

::: tip
*Control Characters* in the ranges named **C0** (0x00-0x1F) and **C1** (0x80-0x9F) are normally considered *non-printable* characters.
This is true for the VT100 (and all terminal personalities included in the VT132).

**The exception is when ANSI.SYS compliance is enabled.**

In this mode only the *Control Characters* listed above with *Yes* in the **ANSI.SYS** column are considered *non-printable*.
All other *Control Characters* **will be** output to the terminal, showing the corresponding glyph from the currently selected font. This is designed to allow a greater range of the [CP437](https://en.wikipedia.org/wiki/Code_page_437#Character_set) character set to be output to the terminal and many of these glyphs are used in BBSs to display extra symbols and also in ANSI art.
:::

### Control Sequences

The following tables of *Control Sequences* are grouped into 4 categories:

- [Original VT100 Control Sequences](#original-vt100-control-sequences)
- [Additional Control Sequences](#additional-control-sequences) from later models of VT family terminals
- [ANSI.SYS Control Sequences](#ansi-sys-control-sequences) specific to ANSI.SYS support
- [Original VT52 Control Sequences](#original-vt52-control-sequences)

### Original VT100 Control Sequences

| Control Sequence | Name | Action Taken | Default Value |
| ---------------- | ---- | ------------ | ------------- |
| `ESC [ Pn ; Pn R` | *CPR* | *Cursor Position Report*<br/>Response to DSR | |
| `ESC [ Pn D` | CUB | Cursor Backward | 1 |
| `ESC [ Pn B` | CUD | Cursor Down | 1 |
| `ESC [ Pn C` | CUF | Cursor Forward | 1 |
| `ESC [ Pn ; Pn H` | CUP | Cursor Position | 1 |
| `ESC [ Pn A` | CUU | Cursor Up | 1 |
| `ESC [ Pn c` | DA | Device Attributes | 0 |
| `ESC [ ? 1 ; Pn c` | *DA* | *Device Attributes response*<br/>Hardcoded to:<br/>`Esc [ ? 64 ; 1 ; 6 ; 22 c` | |
| `ESC # 8` | DECALN | Screen Alignment Display | |
| `ESC [ ? 2 l` | DECANM | ANSI/VT52 Mode | |
| `ESC [ ? 8 h/l` | DECARM | Auto Repeat Mode | |
| `ESC [ ? 7 h/l` | DECAWM | Auto-wrap Mode | |
| `ESC [ ? 1 h/l` | DECCKM | Cursor Keys Mode | |
| `ESC [ ? 3 h/l` | DECCOLM | 132/80 Column Mode | |
| `ESC # 3` | DECDHL | Double Height Line -Top Half | |
| `ESC # 4` | DECDHL | Double Height Line - Bottom Half | |
| `ESC # 6` | DECDWL | Double Width Line | |
| `ESC Z` | DECID | Identify Terminal | |
| `ESC [ ? 9 h/l` | DECINLM | Interlace Mode<br/>*480/240 scan lines* | |
| `ESC =` | DECKPAM | Keypad Application Mode | |
| `ESC >` | DECKPNM | Keypad Numeric Mode | |
| `ESC [ Ps q` | DECLL | Load LEDS | 0 |
| `ESC [ ? 6 h/l` | DECOM | Origin Mode | |
| `ESC 8` | DECRC | Restore Cursor<br/>*Paired with DECSC* | |
| `ESC [ <sol>; ... x` | DECREPTPARM | Report Terminal Parameters<br/>**NOT IMPLEMENTED** | |
| `ESC [ <sol> x` | DECREQTPARM	| Request Terminal Parameters<br/>**NOT IMPLEMENTED** | |
| `ESC 7` | DECSC | Save Cursor<br/>*Paired with DECRC* | |
| `ESC [ ? 4 h/l` | DECSCLM | Scrolling Mode<br/>*Smooth/Jump scrolling*  | |
| `ESC [ ? 5 h/l` | DECSCNM | Screen Mode<br/>*Reverse/Normal*  | |
| `ESC [ Pn; Pn r` | DECSTBM | Set Top and Bottom Margins<br/>*Minimum 2 lines*  | whole screen |
| `ESC # 5` | DECSWL | Single-width Line | |
| `ESC [ 2 ; Ps y` | DECTST | Invoke Confidence Test<br/>**NOT IMPLEMENTED** | |
| `ESC [ Ps n` | DSR | Device Status Report | 0 |
| `ESC [ Ps J` | ED | Erase In Display | 0 |
| `ESC [ Ps K` | EL | Erase In Line | 0 |
| `ESC H` | HTS | Horizontal Tabulation Set | |
| `ESC [ Pn ; Pn f` | HVP | Horizontal and Vertical Position | 1 |
| `ESC D` | IND | Index | |
| `ESC [ 20 h/l` | LNM | Line Feed/New Line Mode | |
| `ESC E` | NEL | Next Line | |
| `ESC M` | RI | Reverse Index | |
| `ESC c` | RIS | Reset To Initial State | |
| `ESC [ Ps ; ... l` | RM | Reset Mode | none |
| | **SCS** | **Select Character Set** | |
| *`ESC ( A`* | *SCS - G0* | G0 - United Kingdom Set | |
| *`ESC ( B`* | *SCS - G0* | G0 - ASCII Set | |
| *`ESC ( 0`* | *SCS - G0* | G0 - Special Graphics | |
| *`ESC ( 1`* | *SCS - G0* | G0 - Alt Standard Character Set | |
| *`ESC ( 2`* | *SCS - G0* | G0 - Alt Special Graphics | |
| *`ESC ) A`* | *SCS - G1* | G1 - United Kingdom Set | |
| *`ESC ) B`* | *SCS - G1* | G1 - ASCII Set | |
| *`ESC ) 0`* | *SCS - G1* | G1 - Special Graphics | |
| *`ESC ) 1`* | *SCS - G1* | G1 - Alt Standard Character Set | |
| *`ESC ) 2`* | *SCS - G1* | G1 - Alt Special Graphics | |
| **`ESC [ Ps ; ... m`** | **SGR** | **Select Graphics Rendition** | |
| *`ESC [ 0 m`* | *SGR* | Attributes Off | |
| *`ESC [ 1 m`* | *SGR* | Bold or Increased Intensity | |
| *`ESC [ 4 m`* | *SGR* | Underscore | |
| *`ESC [ 5 m`* | *SGR* | Blink | |
| *`ESC [ 7 m`* | *SGR* | Negative (reverse/inverse) image | |
| `ESC [ Ps ; ... h` | SM | Set Mode | |
| `ESC [ Ps g` | TBC | Tabulation Clear | 0 |

### Additional Control Sequences

| Control Sequence | Mnemonic | Action Taken | Notes |
| ---------------- | -------- | ------------ | ----- |

TBA

### ANSI.SYS Control Sequences

| Control Sequence | Mnemonic | Action Taken | Notes |
| ---------------- | -------- | ------------ | ----- |
| `ESC [ s` | SCOSC | Save current cursor state (position and attributes) | Does the same as `ESC 7` |
| `ESC [ u` | SCOSC | Restore current cursor state (position and attributes) | Does the same as `ESC 8` |

### Original VT52 Control Sequences

| Control Sequence | Action Taken |
| ---------------- | ------------ |
| `ESC A` | Cursor Up |
| `ESC B` | Cursor Down |
| `ESC C` | Cursor Right |
| `ESC D` | Cursor Left |
| `ESC F` | Enter Graphics Mode |
| `ESC G` | Exit Graphics Mode |
| `ESC H` | Cursor to Home |
| `ESC I` | Reverse Line Feed |
| `ESC J` | Erase to End of Screen |
| `ESC K` | Erase to End of Line |
| `ESC Y line column` | Direct Cursor Address |
| `ESC Z` | Identify |
| `ESC / Z` | *Identify response* |
| `ESC =` | Enter Alternate Keypad Mode |
| `ESC >` | Exit Alternate Keypad Mode |
| `ESC <` | Enter ANSI Mode |
