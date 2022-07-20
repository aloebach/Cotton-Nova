# Cotton-Nova
Nova extension to support the Cotton framework  

<!--
👋 Hello! As Nova users browse the extensions library, a good README can help them understand what your extension does, how it works, and what setup or configuration it may require.

Not every extension will need every item described below. Use your best judgement when deciding which parts to keep to provide the best experience for your new users.

💡 Quick Tip! As you edit this README template, you can preview your changes by selecting **Extensions → Activate Project as Extension**, opening the Extension Library, and selecting "Cotton" in the sidebar.

Let's get started!
-->

<!--
🎈 Include a brief description of the features your extension provides. For example:
-->

**Cotton** provides integration with Cotton - a framework for Pulp-like experiences in Lua for Playdate game development. Originally created for VS code, this extension will allow you to use its features with Panic's wonderful _Nova IDE!_

<!--
🎈 It can also be helpful to include a screenshot or GIF showing your extension in action:
-->

![](https://github.com/aloebach/Cotton-Nova/blob/308b5118a93358e14fb7de3b2200a697f52d1695/Images/cotton-extension.gif)

## Requirements

<!--
🎈 If your extension depends on external processes or tools that users will need to have, it's helpful to list those and provide links to their installers:
-->

Cotton requires some additional tools to be installed on your Mac:
- [Cotton](https://github.com/unbelievableflavour/Cotton), which is available on GitHub
- [LDtk](https://ldtk.io/) Level Designer Toolkit

<!--
✨ Providing tips, tricks, or other guides for installing or configuring external dependencies can go a long way toward helping your users have a good setup experience:
-->

## Setting up Cotton on your Mac

1. Download and install the tools linked in the requirements section above.
2. Download the 'zip' file with the [the latest version of Cotton](https://github.com/unbelievableflavour/Cotton/releases).
3. Extract it in the project folder of your choosing and rename it to the name of your project
4. Right click on the project folder and select "Open in Nova"
5. In Nova, go to the project settings and add the task "Playdate - Cotton" ( This will allow you to automatically run & build your playdate game with `cmd+r` )
6. You are now ready to work on your project!


## Usage

<!--
🎈 If users will interact with your extension manually, describe those options:
-->
Go to `Extensions`->`Cotton`->`Documentation: Cotton Wiki` to read about how to get started editing the code to make the game your own.
To run your game in Cotton:
- simply press `cmd_r` or press the green arrow next to your project name to build & run the Playdate .pdx file in the simulator

<!--
🎈 Alternatively, if your extension runs automatically (as in the case of a validator), consider showing users what they can expect to see:
-->

