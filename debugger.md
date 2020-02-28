[Vue Debugging](https://vuejs.org/v2/cookbook/debugging-in-vscode.html)

1. [Install Firefox Debugger](https://marketplace.visualstudio.com/items?itemName=firefox-devtools.vscode-firefox-debug)

2. Add the following to `vue.config.js` inside of `module.exports`:
   ```javascript
   configureWebpack: {
     devtool: 'source-map'
   }
   ```
3. Click the debug icon from the activity menu

4. Click the gear icon at the top to configure a launch.json file

5. In `configurations`, add the following:
   ```json
   {
     "type": "firefox",
     "request": "launch",
     "name": "vuejs: firefox",
     "url": "http://localhost:8080/",
     "webRoot": "${workspaceFolder}/src",
     "pathMappings": [{ "url": "webpack:///src/", "path": "${webRoot}/" }]
   }
   ```
   **Note**: You may need to edit the URL if the app launches to a custom URL rather than the standard one above.

6. Set breakpoints
7. In terminal, run `yarn serve`
8. In VSCode, select `vuejs: firefox` from the debug dropdown and hit the green play button.
   - Browser should automatically open and stop at any breakpoints set

