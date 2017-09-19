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
            tenDay: result.tenDayForecast,
          },
        })
      })
  }
  componentDidMount() {
    console.log('storage', localStorage.getItem('location'));
    if (this.state.apiData == null && localStorage.location !== '') {
      this.getAPIData(localStorage.getItem('location'));
    }
  }
  render() {
    return (
      <div className="weatherly">
        <div className="splash">
          <div className="search-container">
            <Header />
            <Search getAPIData={this.getAPIData.bind(this)} />
          </div>
          {
            this.state.apiData &&
            <Current data={this.state.apiData} />
          }
        </div>
        <main>
          <h2>Forecast</h2>
          <hr />
          <div className="hour-cards">
            {
              this.state.apiData &&
              <Seven data={this.state.apiData}/>
            }
          </div>
          <hr />
          <div className="ten-cards">
            {
              this.state.apiData &&
              <Ten data={this.state.apiData}/>
            }
          </div>
        </main>
      </div>
    );
  }
}
