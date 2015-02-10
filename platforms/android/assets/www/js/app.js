// QRShop Starter

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
window.QRShop = angular.module('qrshop', ['ionic', 'qrshop.controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.Connection) {
            if(navigator.connection.type == Connection.NONE) {
                $ionicPopup.confirm({
                    title: "Internet Disconnected",
                    content: "The internet is disconnected on your device."
                })
                .then(function(result) {
                    if(!result) {
                        ionic.Platform.exitApp();
                    }
                });
            }
        }
        
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
});