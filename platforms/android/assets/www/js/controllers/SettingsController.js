(function() {
    'use strict';

    QRShop.controller('SettingsController', [
        '$scope',
        '$state',
        'GeoService',
        function($scope, $state, GeoService){
            $scope.userInfo = {
                username: 'Євген',
                email: 'oigen90@gmail.com',
                gender: 'M',
                phonesList: [
                  '050 915-29-16'
                ],
                addressList: [
                    {
                        city: 'Київ',
                        district: 'Солом\'янський район',
                        street: 'вул. Вадима Гетьмана',
                        building: 38,
                        entrance: 1,
                        floor: 5,
                        flat: 82,
                        additional: ''
                    }
                ],
            };

            window.userInfo = $scope.userInfo;

            $scope.geoAddress = GeoService.reverseGeocode();

            // $scope.emptyAddress = {
            //     city: $scope.geoAddress.city,
            //     district: $scope.geoAddress.district,
            //     street: $scope.geoAddress.street,
            //     building: $scope.geoAddress.building,
            //     entrance: null,
            //     floor: null,
            //     flat: null,
            //     additional: ''
            // }

            function createAddressTemplate() {
                this.city = $scope.geoAddress.city;
                this.disctict = $scope.geoAddress.district;
                this.street = $scope.geoAddress.street;
                this.building = $scope.geoAddress.building;
                this.entrance = '';
                this.floor = '';
                this.flat = '';
                this.additional = '';
            }

            $scope.$state = $state;
            // alert($scope.$state.params.number);
            // // alert(Object.keys($scope.$state.params));
            // if ($scope.$state.current.name === 'app.settings-address') {
            //     // $scope.addressForm = createAddressTemplate();
            // } else if ($scope.$state.current.name === 'app.settings-address-edit') {
            //     $scope.addressForm = $scope.userInfo.addressList[$scope.$state.params.number];
            // }

            $scope.addressForm = $scope.userInfo.addressList[$scope.$state.params.number || 0];

            alert($scope.$state.current.name + ' :: ' + $scope.$state.params.number || 0);
            alert($scope.addressForm.floor);

            $scope.addNewAddress = function() {
                var newAddress = new createAddressTemplate();
                $scope.userInfo.addressList.push(newAddress);
            };
        }
    ]);
})();