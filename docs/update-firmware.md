---
description: "Updating SD2PSX firmware"
---

# Updating the firmware

To update SD2PSX firmware to the latest version, follow the steps described below.

## Download the latest firmware

Visit [GitHub releases](https://github.com/sd2psx/firmware/releases) to download the latest firmware. Click on the "Assets" text to expand the list, then click on "sd2psx.uf2" to download the latest firmware build.

## Reboot SD2PSX into the download mode

To put SD2PSX into a firmware update mode, follow any of the following options. You should see a new removable USB drive appear on your computer after the device is booted into the download mode:

- For a freshly manufactured SD2PSX without firmware loaded on it, you can simply plug it in using a USB-C cable
- For an SD2PSX that has had firmware flashed onto it previously, unplug the USB-C cable, then hold either of the two buttons on top of SD2PSX and plug a USB-C cable while continuing to hold the button
- If neither of the above worked, you will have to disassemble your SD2PSX and hold the internal button labeled with "BOOT" while plugging in a USB-C cable

## Install new firmware

To install the new firmware, simply copy the `sd2psx.uf2` file you've downloaded in a previous step onto the removable USB drive. Use the "Safely Remove Hardware" menu to eject the drive and wait for the SD2PSX to reboot.

