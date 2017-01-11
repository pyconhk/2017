/* globals google */
var mapDiv = document.getElementById('map');
google.maps.event.addDomListener(window, 'load', function () {
  var lat = 22.2595221, lng = 114.1318008;
  var center = new google.maps.LatLng(lat, lng);
  var map = new google.maps.Map(mapDiv, {
    zoom: 17,
    center: center
  });

  var marker = new google.maps.Marker({
    map: map,
    visible: false,
    // Define the place with a location, and a query string.
    place: {
      location: {lat: lat, lng: lng},
      query: 'Cyberport 3 Core E, Hong Kong'
    }
  });

  // Construct a new InfoWindow
  var infoWindow = new google.maps.InfoWindow({
    content: [
      '<div id="map-infowindow">',
      '<a class="address address-en" ',
      'title="Open Cyberport 3 Core E with Google Map" ',
      'href="https://www.google.com.hk/maps/place/Cyberport+3+Core+E,+Telegraph+Bay/" ',
      'target="_blank">HKOSCon 2016 Venue</a>',
      '</div>'
    ].join('')
  });

  // Opens the InfoWindow by default
  infoWindow.open(map, marker);

  // animate the marker
  setTimeout(function () {
    marker.setVisible(true);
    marker.setAnimation(google.maps.Animation.DROP);
  }, 2000);
});