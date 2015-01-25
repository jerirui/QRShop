(function() {
    'use strict';

    QRShop.controller('DeveloperInfoController', [
        '$scope', 
        function($scope){
            // window.open('http://linkedin.com/in/oigen90/', '_self');

            $scope.linkedinUrl = 'http://linkedin.com/in/oigen90/';

            $scope.showLinkedin = function() {
                alert('Ra');
            }
        }
    ]);
})();