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
}



