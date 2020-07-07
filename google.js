class Google {
  constructor() {
    this.api_key = 'AIzaSyBUrUo_JNTg3i--xAS-Cc7xtC61lbLFtK0'
  }


  async getBars(location) {
    const barResponse = await fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${this.api_key}`);

    const response = await barResponse.json();

    return {
      response
    }
  }
}