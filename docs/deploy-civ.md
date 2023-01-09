---
description: "Deploy CIV onto SD2PSX for PS2 compatibility"
---

# Deploy CIV

For the SD2PSX card to work with a PS2 system in PS2 mode, the CIV (Challenge IV) has to be installed onto the SD2PSX card. CIV is an 8-byte initialization vector that is used as part of the MagicGate technology.

While we cannot provide the value here due to legal concerns, you can [find it](https://google.com/) elsewhere and then come back to this page.

The PS2 mode of SD2PSX will not be operational until a correct CIV is deployed. A warning text: "PS2: No CIV!" will be displayed on top of the screen until you install the CIV.

Before continuing with the tutorial, power off your SD2PSX card, remove the microSD card and put the microSD into your PC.

## Prepare CIV.BIN

Use a hex editor, for example [010 Editor](https://www.sweetscape.com/010editor/) to create the file.

* First, create a new file and use the "View" menu to switch 010 into the hex editing mode:

![](/assets/images/010-view.png)

* Next, copy the value of the CIV and then use the "Edit" menu to paste it into the file:

![](/assets/images/010-paste.png)

* Confirm that the value of the CIV is valid, it must be exactly 8 bytes long and the rest of the file must be empty:

![](/assets/images/010-data.png)

* Save this file to the root of the microSD card with the name "CIV.BIN"

## Deploy CIV.BIN

Put the microSD card back into the SD2PSX and power it on. Next, navigate to Menu -> "PS2 Settings" -> "Deploy CIV.bin". A message should appear indicating that the deployment was successful.

After the CIV is deployed to SD2PSX, it can be used as a regular PS2 memory card, including installing FMCB and other exploits. Future firmware updates should not affect the deployed CIV, and it should continue working normally.

Since the CIV is stored in SD2PSX internal memory, you can now delete CIV.BIN from the microSD card.
