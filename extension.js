// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    let disposable = vscode.commands.registerCommand('life-reminder.insertPhrase', function () {
        const editor = vscode.window.activeTextEditor;
        
        if (editor) {
            const phrase = 'remember that life goes on';
            editor.edit(editBuilder => {
                editBuilder.insert(editor.selection.active, phrase);
            });
        }
    });

    context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
