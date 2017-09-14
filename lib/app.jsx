import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Search from './Search';
import Current from './Current-Weather';
import API from './API'
import Seven from './Seven-Hour';
import Ten from './Ten-Day';
import '../CSS/styles.css';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: {},
      location: '',
    }
  }
  getAPIData(location) {

    const apiResults = new API(location);
    apiResults.getForecast()
    this.setState({ apiData: { current: apiResults.current, sevenHour: apiResults.sevenHourForecast, tenDay: apiResults.tenDayForecast} });
  }
  render() {
    return (
    <div className="weatherly">
      <Header />
      <Search setLocation={this.getAPIData.bind(this)} />
      <main>
        <Current data={this.state.apiData}/>
        <h2>Forecast</h2>
        <hr />
        <Seven />
        <Ten />
      </main>
    </div>
  );
  }
}
