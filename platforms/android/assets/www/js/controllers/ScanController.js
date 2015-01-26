(function() {
    'use strict';

    QRShop.controller('ScanController', [
        '$scope', 
        function($scope){
            $scope.startScanning = function() {
                cordova.plugins.barcodeScanner.scan(
                    function (result) {
                        alert("We got a barcode\n" +
                              "Result: " + result.text + "\n" +
                              "Format: " + result.format + "\n" +
                              "Cancelled: " + result.cancelled);
                    }, 
                    function (error) {
                        alert("Scanning failed: " + error);
                    }
               );
            }
        }
    ]);
})();