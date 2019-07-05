`Visual Studio Code` and `i3` window manager integration

This is not yet mature and recommend not to use this.

## Features
Seamless navigation between Visual Studio Code and i3.

## Extension Settings
Extension exposes following commands for keybindings
- `extension.vscode-i3-navigate-left`
- `extension.vscode-i3-navigate-right`
- `extension.vscode-i3-navigate-up`
- `extension.vscode-i3-navigate-down`

## Limitations
Due to Visual Studio Code (VSCode) extension API limitations, there are restrictions.
1. When seamless navigation allows navigation between editor and sidebar/panel, it is not possible to do seamless navigation between sidebar/panel and other apps.
>`workbench.action.navigateLeft` will navigate between editor and sidebar/panel.

>VSCode extension API does not expose sidebar/panel visibility or focus property.
>There is also no way to detect if user move focus away from `vscode.window.activeTextEditor`

2. When seamless navigation allows editors only in VSCode, navigation is seamless but user loses ability to navigate between editor and sidebar/panel.
>`workbench.action.focusLeftGroup` will navigate between editors only.

<!-- ## Known Issues -->

## Release Notes

### 0.0.1
Initial test release
