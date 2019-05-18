      var map, infoWindow,panorama;
      function initMap() {
        const base =  {lat: -34.397, lng: 150.644}
        map = new google.maps.Map(document.getElementById('map'), {
            center: base,
          zoom: 6
        });
        infoWindow = new google.maps.InfoWindow;

        
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
            panorama = new google.maps.StreetViewPanorama(
                document.getElementById('pano'), {
                  position: pos,
                  pov: {
                    heading: 34,
                    pitch: 10
                  }
                });
            map.setStreetView(panorama);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
          
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }