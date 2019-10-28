This Boilerplate aims on Writing react code once that runs on all Platforms, utilizing react, react-native and electron.

[x]React
[x]Electron
[-]React-Native

Permissions are wrong. temp fix use chmod -R 777 ProjectFolder.

Metro bundler can't find ./App.js


skipped enabling windows

TODO:


function enableWindows() {
    console.log('EnableWindows);
    execSync('react-native windows', {stdio: 'inherit'});

    unlinkSync(resolve('App.windows.js'));
}

enableWindows();