import jenKey from './keys.js';


export default class API {
  constructor(location) {
    this.location = location;
    this.url = `http://api.wunderground.com/api/${jenKey.jenKey}/conditions/hourly/forecast10day/q/${this.location}.json`;
  }
  getForecast() {
    fetch(this.url)
      .then((response) => response.json()) // Transform the data into json
      .then((data) => {
        const location = data.current_observation.display_location.full; // Get the results
        console.log('location is: ', location);
        return;
      }).catch((error) => {
        console.log('ERROR: ', error);
      });
  }
}
