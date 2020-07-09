// Init Google
const googleJs = new Google;

// Init UI
const ui = new UI;

// Add Event Listeners
const searchInput = document.getElementById('searchBars');

// searchInput.addEventListener('keyup', enterKeySearch);

const searchBtn = document.getElementById('searchBtn').addEventListener('click', populateBarList);

var markers = []

googleJs.initMap(markers);

// function enterKeySearch(event) {
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     populateBarList;
//   };
// }

function populateBarList() {
  const searchLocation = searchInput.value;

  console.log(searchLocation);

  // Create an array of markers
  markers = []

  googleJs.getBars(searchLocation)
  .then(data => {
    ui.clearBars();
    // console.log(data.results);


    data.results.forEach(bar => { 
      ui.showBar(bar)
      markers.push({coords:{lat:bar.geometry.location.lat,lng:bar.geometry.location.lng}})
    });
    googleJs.initMap(markers);
  })
  .catch(err => console.log(err));


  // CLEAR FORM INPUT
  searchInput.value = '';

}
