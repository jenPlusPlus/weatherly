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
      apiData: null,
      location: '',
    }
  }

  getAPIData(location) {
    const apiResults = new API(location);
    apiResults.getForecast()
      .then(result => {
        this.setState({
          apiData: {
            current: result.current,
            sevenHour: result.sevenHourForecast,
            tenDay: result.tenDayForecast
          }
        })
      })
  }
  render() {
    return (
      <div className="weatherly">
        <Header />
        <Search getAPIData={this.getAPIData.bind(this)} />
        <main>
          {
            this.state.apiData &&
            <Current data={this.state.apiData}/>
          }
          <h2>Forecast</h2>
          <hr />
          <Seven />
          <Ten />
        </main>
      </div>
    );
  }
}
