import jenKey from './keys.js';


export default class API {
  constructor(location) {
    this.location = location;
    this.url = `http://api.wunderground.com/api/${jenKey.jenKey}/conditions/hourly/forecast10day/q/${this.location}.json`;
    this.current = {};
    this.sevenHourForecast = [];
    this.tenDayForecast = [];
  }
  getForecast() {
    localStorage.setItem('location', this.location);
    return fetch(this.url)
      .then((response) => response.json()) // Transform the data into json
      .then(jsonData => this.parseData(jsonData))
      .catch((error) => {
        console.log('ERROR: ', error);
      });
  }
  parseData(data) {
    this.current.city = data.current_observation.display_location.full; // Get the results
    this.current.condition = data.current_observation.weather; // Get the results
    this.current.day = data.forecast.txt_forecast.forecastday[0].title; // Get the results
    this.current.temp = data.current_observation.temp_f; // Get the results
    this.current.highTemp = data.forecast.simpleforecast.forecastday[0].high.fahrenheit; // Get the results
    this.current.lowTemp = data.forecast.simpleforecast.forecastday[0].low.fahrenheit; // Get the results
    this.current.summary = data.forecast.txt_forecast.forecastday[0].fcttext;  // Get the results

    const sevenHourForecast = data.hourly_forecast;  // Get the results
    for (let i = 0; i < 7; i++) {
      this.sevenHourForecast.push({ hour: sevenHourForecast[i].FCTTIME.civil, iconURL: sevenHourForecast[i].icon_url, temp: sevenHourForecast[i].temp.english });
    }

    const tenDayForecast = data.forecast.simpleforecast.forecastday;  // Get the results
    for (let i = 0; i < 10; i++) {
      this.tenDayForecast.push({ day: tenDayForecast[i].date.weekday, iconURL: tenDayForecast[i].icon_url, highTemp: tenDayForecast[i].high.fahrenheit, lowTemp: tenDayForecast[i].low.fahrenheit });
    }
    return this;
  }
}
