// Init Google
const google = new Google;

// Add Event Listeners
const searchInput = document.getElementById('searchBars');

const searchBtn = document.getElementById('searchBtn').addEventListener('click', populateBarList);

function populateBarList() {
  const searchLocation = searchInput.value;

  console.log(searchLocation);


  google.getBars(searchLocation)
  .then(data => {
    console.log(data);
  })
}

