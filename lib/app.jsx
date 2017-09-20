import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Search from './Search';
import Current from './Current-Weather';
import API from './API'
import Seven from './Seven-Hour';
import Ten from './Ten-Day';
import Welcome from './Welcome';
import '../CSS/styles.css';
import Trie from '../prefix-trie/scripts/Trie';
import Autocomplete from './Autocomplete';
import Cities from './CityList';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
    }
    this.trie = new Trie;
    this.trie.populate(Cities);
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
    console.log('localStorage.location', localStorage.location);
    if (this.state.apiData == null && localStorage.location != null) {
      this.getAPIData(localStorage.getItem('location'));
    }
  }
  render() {
    return (
      <div className="weatherly">
        <div className="splash">
          <div className="search-container">
            <Header />
            <Search getAPIData={this.getAPIData.bind(this)} prefixTrie={this.trie}/>
          </div>
          {
            localStorage.location == undefined &&
            <Welcome />
          }
          {this.state.apiData &&
          <div>

            <Current data={this.state.apiData} />

          </div>
          }
          </div>
          {
            this.state.apiData &&
            <main>
              <div className='weather-data'>

                <h2>Forecast</h2>
                <hr />

                  <Seven data={this.state.apiData}/>

                <hr />

                  <Ten data={this.state.apiData}/>



              </div>
            </main>
          }

        </div>
    );
  }
}
