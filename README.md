This project was built using [Expo](https://docs.expo.dev/).

It includes the following libraries:
- [React Navigation v6](https://reactnavigation.org/)


### Prerequisites
- [Node.js LTS release](https://nodejs.org/en/)
  - If you use [Volta](https://volta.sh/), a known working lts version is pinned in this project.
- [Watchman](https://facebook.github.io/watchman/docs/install.html) for macOS or Linux users
- [Expo Go App](https://expo.dev/client) to run on your on devices, connected on the same local network.
- [Xcode](https://docs.expo.dev/workflow/ios-simulator/#step-1-install-xcode) if you want to run on a local iOS simulator.
- [Android Studio](https://docs.expo.dev/workflow/android-studio-emulator/#step-1-set-up-android-studios-tools) if you want to run on a local Android emulator.

### Installation

```bash
$ npm install
```

### Running

To show a list of running options

```bash
$ npm start
```

To run on iOS

```bash
$ npm run ios
```

To run on Android

```bash
$ npm run android
```

### Testing

Tests are written using [Jest](https://jestjs.io/) and [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)

```bash
$ npm run test
```
