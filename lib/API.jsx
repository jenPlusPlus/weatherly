import jenKey from './keys.js';


export default class API {
  constructor(location) {
    this.location = location;
    this.url = `http://api.wunderground.com/api/${jenKey.jenKey}/conditions/hourly/forecast10day/q/${this.location}.json`;
    this.conditions = '';
    this.day = '';
    this.temp = null;
    this.highTemp = null;
    this.lowTemp = null;
    this.summary = '';
    this.sevenHourForecast = [];
    this.sevenHourForecastImgURLs = [];
    this.tenDayForecast = [];
    this.tenDayForecastImgURLs = [];
  }
  getForecast() {
    const promise = fetch(this.url)
      .then((response) => response.json()) // Transform the data into json
      .then((data) => {
        const location = data.current_observation.display_location.full; // Get the results
        console.log('location is: ', location);

        const condition = data.current_observation.weather; // Get the results
        console.log('curr condition is: ', condition);

        const temp = data.current_observation.temp_f; // Get the results
        console.log('current temp (F) is: ', temp);

        const highTemp = data.forecast.simpleforecast.forecastday[0].high.fahrenheit; // Get the results
        console.log('high temp (F) is: ', highTemp);

        const lowTemp = data.forecast.simpleforecast.forecastday[0].low.fahrenheit; // Get the results
        console.log('low temp (F) is: ', lowTemp);

        const summary = data.forecast.txt_forecast.forecastday[0].fcttext;  // Get the results
        console.log('summary is: ', summary);

        const sevenHourForecast = data.hourly_forecast;  // Get the results
        console.log('seven hour forecast is: ');
        for (let i = 0; i < 7; i++) {
          console.log('hour: ', sevenHourForecast[i].FCTTIME.civil);
          console.log('temp: ', sevenHourForecast[i].temp.english);
        }

        let sevenHourForecastImgURLs = [];
        for (let i = 0; i < 7; i++) {
          sevenHourForecastImgURLs.push({ iconURL: sevenHourForecast[i].icon_url });
        }

        console.log('icon urls: ', sevenHourForecastImgURLs);



        const tenDayForecast = data.forecast.simpleforecast.forecastday;  // Get the results
        console.log('ten day forecast is: ');
        for (let i = 0; i < 10; i++) {
          console.log('day: ', tenDayForecast[i].date.weekday);
          console.log('high: ', tenDayForecast[i].high.fahrenheit);
          console.log('low: ', tenDayForecast[i].low.fahrenheit);
        }

        let tenDayForecastImgURLs = [];
        for (let i = 0; i < 10; i++) {
          tenDayForecastImgURLs.push({ iconURL: tenDayForecast[i].icon_url });
        }

        console.log('icon urls: ', tenDayForecastImgURLs);

        return;
      }).catch((error) => {
        console.log('ERROR: ', error);
      });
  }
}
