class Google {
  constructor() {
    this.api_key = 'AIzaSyBUrUo_JNTg3i--xAS-Cc7xtC61lbLFtK0'
  }

  async getBars(location) {
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=bar+${location}+canada&key=${this.api_key}`, { 
      mode: 'cors',
      headers: {
      // 'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT,DELETE',
      // 'Access-Control-Request-Headers': 'Content-Type,AIzaSyBUrUo_JNTg3i--xAS-Cc7xtC61lbLFtK0'
    }
  });

    const responseData = await response.json();

    return responseData
  };

  initMap(markers) {
    // Map Options
    var jsonStyle = getJson();
    
    var options = {
      zoom:9,
      center: {lat:41.8781,lng:-87.6298},
      styles: jsonStlye
    }
  
    // New Map
    var map = new google.maps.Map(document.getElementById('map'), options);
  
    // Loop through markers
    for(var i = 0; i< markers.length;i++){
      // Add Marker 
      addMarker(markers[i]);
    }
  
    // Add Marker Function
    function addMarker(props) {
      var marker = new google.maps.Marker({
        position: props.coords,
        map: map,
      });
  
      // Check for content
      if(props.content){
        var infoWindow = new google.maps.InfoWindow({
          content: props.content
        });
  
        marker.addListener('click', function(){
          infoWindow.open(map, marker);
        });
      }
    }
      // GET LOCAL JSON DATA
      function getJson(){
        fetch('mapstyle.json')
          .then(response => {
            return response.json();
          }).then(data => {
            // Work with JSON data here
            return data
          }).catch(err => {
            // Do something for an error here
          });
      }
  }
}




