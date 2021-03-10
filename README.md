# TomsLighting

Android app for controlling my raspberry pi powered lighting.

APK available for direct download [here](https://github.com/tom-james-watson/toms-lighting-app/raw/master/toms-lighting.apk)

## Screenshots

<img src="https://github.com/tom-james-watson/toms-lighting-app/raw/master/screenshots/app.png" width="250">
<img src="https://github.com/tom-james-watson/toms-lighting-app/raw/master/screenshots/notification.png" width="250">

## Development

Install react-native dependencies from https://facebook.github.io/react-native/docs/getting-started.html

Install dependencies

```
npm install
```

You now need to manually install java 8:

```
sudo apt-get install openjdk-8-jdk
```

Start react native:

```
JAVA_HOME="/usr/lib/jvm/java-1.8.0-openjdk-amd64" npx react-native start
```

Plug in an android device with usb debugging enabled and run

```
JAVA_HOME="/usr/lib/jvm/java-1.8.0-openjdk-amd64" npx react-native run-android
```

## Build

Instructions available at http://facebook.github.io/react-native/docs/signed-apk-android.html
