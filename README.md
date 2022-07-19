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

![](https://nova.app/images/en/dark/editor.png)

## Requirements

<!--
🎈 If your extension depends on external processes or tools that users will need to have, it's helpful to list those and provide links to their installers:
-->

Cotton requires some additional tools to be installed on your Mac:
- [Cotton](https://github.com/unbelievableflavour/Cotton), which is available on GitHub
- [LDtk](https://ldtk.io/) Level Designer Toolkit

I also recommend installing the Playdate extension for Nova for conveniently building and running your Playdate code.
- [Playate Extension for Nova](https://extensions.panic.com/extensions/com.panic/com.panic.Playdate/)

<!--
✨ Providing tips, tricks, or other guides for installing or configuring external dependencies can go a long way toward helping your users have a good setup experience:
-->

## Setting up Cotton on your Mac

1. Download and install the tools linked in the requirements section above.
2. Download the 'zip' file with the [the latest version of Cotton](https://github.com/unbelievableflavour/Cotton/releases).
3. Extract it in the project folder of your choosing and rename it to the name of your project
4. Right click on the project folder and select "Open in Nova"
5. Optionally install the Playdate extension and add `playdate Simulator` task to your project ( This will give access to to features like compile tasks, automatic Lua formatting, etc.)
6. You are now ready to work on your project!


## Usage

<!--
🎈 If users will interact with your extension manually, describe those options:
-->

To run Cotton:

- Select the **Editor → Cotton** menu item; or
- Open the command palette and type `Cotton`

<!--
🎈 Alternatively, if your extension runs automatically (as in the case of a validator), consider showing users what they can expect to see:
-->

Cotton runs any time you open a local project, automatically lints all open files, then reports errors and warnings in Nova's **Issues** sidebar and the editor gutter:

![](https://nova.app/images/en/light/tools/sidebars.png)

### Configuration

<!--
🎈 If your extension offers global- or workspace-scoped preferences, consider pointing users toward those settings. For example:
-->

To configure global preferences, open **Extensions → Extension Library...** then select Cotton's **Preferences** tab.

You can also configure preferences on a per-project basis in **Project → Project Settings...**

<!--
👋 That's it! Happy developing!

P.S. If you'd like, you can remove these comments before submitting your extension 😉
-->
