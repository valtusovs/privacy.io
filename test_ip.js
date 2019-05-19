

// get the API result via jQuery.ajax

$.getJSON('https://ipapi.co/json/', function(data){
        // output the "calling_code" object inside "location"
        
        
        const ip = document.getElementById('ip')
        ip.textContent += `${data.ip}`
        
        const base =  {lat: data.latitude, lng: data.longitude}
        map = new google.maps.Map(document.getElementById('map_ip'), {
            center: base,
            zoom: 10
        });
        infoWindow = new google.maps.InfoWindow;

        infoWindow.setPosition(base);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(base);
      
        // set endpoint and your access key
        
        



    }
);






