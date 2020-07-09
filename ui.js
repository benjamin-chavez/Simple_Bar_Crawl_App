class UI {
  constructor() {
    this.barList = document.getElementById('bars');
  }

  clearBars() {
    this.barList.innerHTML = ''
  }

  showBar(bar) {
    this.barList.innerHTML +=
    `<li class="list-group-item">
      <div class="row">
        <div class="col-4">${bar.name}</div>
        <div class="col-4">${bar.geometry.location.lat}</div>
        <div class="col-4">${bar.geometry.location.lng}</div>
      </div>
    </li>`
  }

  

  addMarker(markers){
    var map = new google.maps.Map(document.getElementById('map'));
    

    for(var i = 0; i< markers.length;i++){
      // Add Marker 
      addMarker2(markers[i]);
    }
    
    function addMarker2(props) {
      var marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        // icon: props.iconImage
      });
      
    }
  }
}
