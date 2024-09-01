---
sidebar: auto
editLink: false
---
# S-132 Firmware Update Guide

The firmware update process for the S-132 requires you to:
- first download and copy the firmware update file to your IMSAI8080 or Cromemco Z-1 emulator 
- then start the firmware update process on the S-132 itself

Follow the 4 steps detailed below to successfully complete the S-132 firmware update.


## Download the update file from GitHub

The current production firmware can always be found at [github.com/thehighnibble/s-132/releases/latest](https://github.com/thehighnibble/s-132/releases/latest)

Download the `update.bin` file, listed under _Assets_ at the bottom of the release notes, to your local computer

## Copy the update file to the host (IMSAI8080 or Cromemco Z-1)

Now you can now simply drag-and-drop the `update.bin` file onto the **SYS:** icon on the (Web) desktop GUI of your emulator (IMSAI8080 or Cromemco Z-1) 

## Reset the host (IMSAIO8080 or Cromemco Z-1)

When the upload is complete, reboot the host ESP32 and the update will be identified and unpacked.

::: tip
Your IMSAI8080 or Cromemco Z-1 will take longer to startup than usual while it unpacks the update file.

You can optionally watch the output on the boot console (typically via USB port @ 115200 8N1) to see the process proceed.
:::

##  Start the _Flash F/W_ process on the S-132

Now on the **S-132**, open the _System Menu_ (**SYS:**) with the key combination `<ctrl><alt><F6>`

Goto the `S-132 > Flash F/W` menu selection and press `<enter>`

If the firmware update is found on the host the the following  message will be shown in large, green text on the S-132 display

<div class="language- extra-class"><pre class="language-text">
<span style="color: limegreen; font-size: 1.7em" class="line-number">S-132 Firmware update available</span>
</pre></div>
Followed by:

```
Press <Prog> on the S-132 to begin
```

::: tip 
At this point you have 5 (five) seconds to find and press the `Prog` button on the top edge of the S-132 PCB to continue with the firmware update

If you wait for more than the 5 (five) seconds the update process will end and you will return to the _System Menu_ (**SYS:**)

This is not a problem, just repeat this step and the firmware update will still be there and available on the host

:::

::: warning
If the firmware update is not found on the host system (see steps above) then the following warning message will be shown in large, yellow text on the S-132 display

<div class="language- extra-class"><pre class="language-text">
<span style="color: yellow; font-size: 1.7em" class="line-number">S-132 Firmware update not present</span>
</pre></div>

Return to the steps above and re-attempt to copy the firmware update to the host system

:::

After you press the `<Prog>` button on the top edge of the S-132 PCB, the firmware will download from the host and be flashed onto the S-132 during which you will see a message like:

```
<Prog> Pressed
Application image found- expecting 1152624 bytes
Firmware update to S-132 V1.7.0 built Aug 26 2024
Updating partition: app1
Bytes remaining: 1152624
```

The `Bytes remaining:` will count down as the download/flash proceeds, and when it reaches `0` (zero) it will be followed by the message:

```
Firmware update complete
Press <Reset> on the S-132 to restart
```

The firmware update process is now complete and the update file will be deleted from the host.

The S-132 will nolonger respond to keyboard input but will wait for you to press the `<Reset>` button on the top edge of the S-132 PCB.

::: warning
If any message other than `Firmware update complete` is displayed, it should indicate what went wrong.

Typically this is because of a fault when verifying the firmware update file, or a fault in flashing the new firmware to the ESP32 on the S-132.

Either way, you will need to begin the firmare update procedure from the beginnng.

It is highly unlikely that a fault at this stage can "brick" your S-132, as the ESP32 firmware update process uses 2 individual slots for firmware and only swiches to the new slot after a successful firmware update. When a firmware update fails, the ESP32 will contine to boot from the last successful firmware loaded.

:::
