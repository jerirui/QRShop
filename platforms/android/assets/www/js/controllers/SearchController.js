(function() {
    'use strict';

    QRShop.controller('SearchController', [
        '$scope', 
        function($scope){
            // var telephoneNumber = cordova.require("cordova/plugin/telephonenumber");
            telephoneNumber.get(function(result) {
                alert("result = " + result);
            }, function(error) {
                alert("error = " + error.code);
            });
        }
    ]);
})();