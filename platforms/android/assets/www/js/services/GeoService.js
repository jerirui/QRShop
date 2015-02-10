(function() {
    'use strict';

    QRShop.factory('GeoService', function() {
        var position = {};
        var address = {};

        function onError(error) {
            $ionicPopup.confirm({
                title: "Помилка: " + error.code,
                content: error.message
            });
        }

        var GeoService = {};

        GeoService.getCurrentPosition = function() {
            navigator.geolocation.getCurrentPosition(function(gotPos) {
                position.lat = gotPos.coords.latitude;
                position.lng = gotPos.coords.longitude;
            },
            onError,
            { enableHighAccuracy: true });

            return position;
        };

        GeoService.reverseGeocode = function() {
            // if (!Object.keys(position).length) GeoService.getCurrentPosition();

            // plugin.google.maps.Geocoder.geocode({position: position}, function(results, status) {
            //     if (results.length) {
            //         address.locale      = results[0].locale;
            //         address.countryCode = results[0].countryCode;
            //         address.country     = results[0].country;
            //         address.city        = results[0].locality;
            //         address.district    = results[1].subLocality;
            //         address.street      = results[0].thoroughfare;
            //         address.building    = results[0].subThoroughfare;
            //     } else {
            //         onError({code: 404, message: 'Не знайдено'})
            //     }
            // });
            var address = {
                city: 'Київ',
                district: 'Солом\'янський район',
                street: 'вул. Вадима Гетьмана',
                building: 38,
                entrance: 1,
                floor: 5,
                flat: 82,
                additional: ''
            }

            return address;
        };

        return GeoService;
    });
})();