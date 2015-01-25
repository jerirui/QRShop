# QRShop
QR-Supermarket Ionic-based hybrid mobile application

## How to run as web application
```bash
npm install http-server -g

cd [app_folder]/www
http-server
```

## How to deploy on Android:

```bash
ionic platform add android

cordova plugin add https://github.com/wildabeast/BarcodeScanner.git
cordova plugin add org.apache.cordova.inappbrowser

ionic build android
ionic run android
```