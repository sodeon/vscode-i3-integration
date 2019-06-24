// NOTE: cannot use "import" statement. Wierd behavior happens (extension command not found).
const vscode = require('vscode');
const { execSync } = require('child_process');

//-----------------------------------------------------------------------------
// Activation, deactivation
//-----------------------------------------------------------------------------
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    function navigate(direction) {
        let Direction = direction[0].toUpperCase() + direction.slice(1);

        let col = vscode.window.activeTextEditor.viewColumn;
        let cmd = vscode.commands.executeCommand('workbench.action.navigate' + Direction);

        cmd.then(() => {
            let newCol = vscode.window.activeTextEditor.viewColumn;
            if (direction == 'left' || direction == 'up') {
                if (newCol >= col)
                    execSync('vim-tmux-i3-integration focus ' + direction);
            } else {
                if (newCol <= col)
                    execSync('vim-tmux-i3-integration focus ' + direction);
            }
        });
    }

    context.subscriptions.push(vscode.commands.registerCommand('extension.vscode-i3-navigate-left' , () => {navigate('left' )}));
    context.subscriptions.push(vscode.commands.registerCommand('extension.vscode-i3-navigate-right', () => {navigate('right')}));
    context.subscriptions.push(vscode.commands.registerCommand('extension.vscode-i3-navigate-up'   , () => {navigate('up'   )}));
    context.subscriptions.push(vscode.commands.registerCommand('extension.vscode-i3-navigate-down' , () => {navigate('down' )}));

    // let disposable = vscode.commands.registerCommand('extension.helloWorld', function () {
    //     vscode.window.showInformationMessage('Hello World!');
    // });
    // context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {}


//-----------------------------------------------------------------------------
// VSCode registration
//-----------------------------------------------------------------------------
module.exports = {
    activate,
    deactivate
}
