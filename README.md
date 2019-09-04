## Vs code configuration

```json
{
  "workbench.colorTheme": "Dracula",
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  "editor.fontSize": 16,
  "editor.lineHeight": 22,
  "editor.tabSize": 2,
  "window.zoomLevel": 0,
  "terminal.integrated.shell.osx": "/bin/zsh",
  // Format a file on save. A formatter must be available, the file must not be auto-saved, and editor must not be shutting down.
  "editor.formatOnSave": true,
  "eslint.autoFixOnSave": true,
  // Enable/disable default JavaScript formatter (For Prettier)
  "javascript.format.enable": false,
  // Use 'prettier-eslint' instead of 'prettier'. Other settings will only be fallbacks in case they could not be inferred from eslint rules.
  "workbench.iconTheme": "material-icon-theme",
  "eslint.validate": [
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "javascript",
      "autoFix": true
    },
    {
      "language": "react",
      "autoFix": true
    }
  ]
}
```
