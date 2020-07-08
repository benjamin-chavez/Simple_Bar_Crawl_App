// Init Google
const google = new Google;

// Init UI
const ui = new UI;

// Add Event Listeners
const searchInput = document.getElementById('searchBars');

const searchBtn = document.getElementById('searchBtn').addEventListener('click', populateBarList);

function populateBarList() {
  const searchLocation = searchInput.value;

  console.log(searchLocation);


  google.getBars(searchLocation)
  .then(data => {
    ui.clearBars();
    data.results.forEach(bar => ui.showBar(bar));
  })
  .catch(err => console.log(err));
}

