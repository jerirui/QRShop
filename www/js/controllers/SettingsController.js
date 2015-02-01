(function() {
    'use strict';

    QRShop.controller('SettingsController', [
        '$scope', 
        function($scope){
            // onSuccess Callback
            // This method accepts a Position object, which contains the
            // current GPS coordinates
            var geolocationSuccess = function(position) {
                alert('Latitude: '          + position.coords.latitude          + '\n' +
                      'Longitude: '         + position.coords.longitude         + '\n' +
                      'Altitude: '          + position.coords.altitude          + '\n' +
                      'Accuracy: '          + position.coords.accuracy          + '\n' +
                      'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                      'Heading: '           + position.coords.heading           + '\n' +
                      'Speed: '             + position.coords.speed             + '\n' +
                      'Timestamp: '         + position.timestamp                + '\n');

                var latlng = new plugin.google.maps.LatLng(position.coords.latitude,position.coords.longitude);

                var request = {
                  'position': position
                };
                plugin.google.maps.Geocoder.geocode(request, function(results, status) {
                  alert(status);
                  if (results.length) {
                    var result = results[0];
                    var position = result.position; 
                    var address = [
                      result.subThoroughfare || "",
                      result.thoroughfare || "",
                      result.locality || "",
                      result.adminArea || "",
                      result.postalCode || "",
                      result.country || ""].join(", ");

                    alert('subThoroughfare: ' + result.subThoroughfare + '\n' +
                          'thoroughfare: '    + result.thoroughfare + '\n' +
                          'locality: '        + result.locality + '\n' +
                          'adminArea: '       + result.adminArea + '\n' +
                          'postalCode: '      + result.postalCode + '\n' +
                          'country: '         + result.country + '\n');
                    
                  } else {
                    alert("Not found");
                  }
                });
            };

            // onError Callback receives a PositionError object
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }


            navigator.geolocation.getCurrentPosition(geolocationSuccess, onError, {enableHighAccuracy:true});

            // navigator.geolocation.getCurrentPosition(function(pos) {
            // geocoder = new google.maps.Geocoder();
            // var latlng = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);

            // var latLng = new plugin.google.maps.LatLng(40.712216,-74.22655);

            // var request = {
            //   'position': latLng
            // };
            // plugin.google.maps.Geocoder.geocode(request, function(results) {
            //   if (results.length) {
            //     var result = results[0];
            //     var position = result.position; 
            //     var address = [
            //       result.subThoroughfare || "",
            //       result.thoroughfare || "",
            //       result.locality || "",
            //       result.adminArea || "",
            //       result.postalCode || "",
            //       result.country || ""].join(", ");

            //     alert('subThoroughfare: ' + result.subThoroughfare + '\n' +
            //           'thoroughfare: '    + result.thoroughfare + '\n' +
            //           'locality: '        + result.locality + '\n' +
            //           'adminArea: '       + result.adminArea + '\n' +
            //           'postalCode: '      + result.postalCode + '\n' +
            //           'country: '         + result.country + '\n');
                
            //   } else {
            //     alert("Not found");
            //   }
            // });



            // navigator.geolocation.getCurrentPosition(function(pos) {
            //     geocoder = new plugin.google.maps.Geocoder();
            //     var latlng = new plugin.google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
            //     geocoder.geocode({'latLng': latlng}, function(results, status) {
            //         if (status == google.maps.GeocoderStatus.OK) {
            //             //Check result 0
            //             var result = results[0];
            //             //look for locality tag and administrative_area_level_1
            //             var city = "";
            //             var state = "";
            //             for(var i=0, len=result.address_components.length; i<len; i++) {
            //                 var ac = result.address_components[i];
            //                 if(ac.types.indexOf("locality") >= 0) city = ac.long_name;
            //                 if(ac.types.indexOf("administrative_area_level_1") >= 0) state = ac.long_name;
            //             }
            //             //only report if we got Good Stuff
            //             if(city != '' && state != '') {
            //                 $("#result").html("Hello to you out there in "+city+", "+state+"!");
            //             }
            //         } 
            //     });
            
            // });
        }
    ]);
})();