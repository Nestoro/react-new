This Boilerplate aims on Writing react code once that runs on all Platforms, utilizing react, react-native and electron.

<img src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png" width="100">

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1200px-Electron_Software_Framework_Logo.svg.png" width="100">

<img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width="100">

<img src="https://camo.githubusercontent.com/b8606e6a237d8e7e7800067f0f739129da1fa6f8/687474703a2f2f7365656b6c6f676f2e636f6d2f696d616765732f4a2f6a6573742d6c6f676f2d463939303145424246372d7365656b6c6f676f2e636f6d2e706e67" width="100">


## TODO

- typescript

## Installation
```
npm i
```
### iOS
```
cd ios
pod install
```

## Quick Start:

### iOS
```
npm run ios
```

### Android
```
npm run android
```

### Desktop
```
npm run electron
```

### Web
```
npm run web
```

## Notes:

skipped enabling windows because react-native windows works on react-native 0.59 and react-native 0.61 is used

TODO:


```
function enableWindows() {
    console.log('EnableWindows);
    execSync('react-native windows', {stdio: 'inherit'});

    unlinkSync(resolve('App.windows.js'));
}

enableWindows();
```