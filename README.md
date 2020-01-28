# react-new ✨
This boilerplate aims on writing react code once that runs on all platforms 📱💻🌐🔥

utilizing 
* React
* React-Native
* Electron

and

* TypeScript
* Jest
* Babel


[<img src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png" width="100">](https://facebook.github.io/react-native/)
[<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1200px-Electron_Software_Framework_Logo.svg.png" width="100">](https://electronjs.org/)
[<img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width="100">](https://www.typescriptlang.org/)
[<img src="https://camo.githubusercontent.com/b8606e6a237d8e7e7800067f0f739129da1fa6f8/687474703a2f2f7365656b6c6f676f2e636f6d2f696d616765732f4a2f6a6573742d6c6f676f2d463939303145424246372d7365656b6c6f676f2e636f6d2e706e67" width="100">](https://jestjs.io/)

## Getting Started 💪

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installation
```
npm i
```
### iOS
```
cd ios
pod install
```

## Quick Start

### iOS 📱
```
npm run ios
```
 
### Android 📱
```
npm run android
```

### Desktop 💻
```
npm run electron
```

### Web 🌐
```
npm run web
```
## Troubleshooting 🐛

* When the Shell (.sh) scripts can't be executed:
Set the bash path (under Windows) 
```bash
npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"
```

## Notes 📝

skipped enabling windows because react-native windows works on react-native 0.59 and react-native 0.61 is used

### react-everywhere

Props to react-everywhere. that template delivered the base for this boilerplate.

[![react-everywhere](https://camo.githubusercontent.com/b3394b073659a75910aebdee0eaf430f1c9f2c5e/68747470733a2f2f7332382e706f7374696d6167652e6f72672f3461307a77316567642f72652d73746172745f312e706e67)](https://github.com/react-everywhere)

## License

React-new is [MIT licensed](./LICENSE). By contributing to React-new, you agree that your contributions will be licensed under its MIT license.

## Changelog

### v0.0.3
- audit fix to get rit of a lot of vunerabilities
- changed entry Point to FunctionComponent because in all projects i used this boilerplate there was no reason not to do so (and even reason to do so)
- removed windows specific stuff since react-native-windows doesn't seem to receive a update any time soon

### v0.0.2
- Removed Redux because its functionality is now provided through react hooks