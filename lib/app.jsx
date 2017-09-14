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
      apiData: undefined,
      location: '',
    }
  }
  getAPIData(location) {
    const apiResults = new API(location);
    this.setState({ apiData: apiResults.getForecast() });
  }
  render() {
    return (
    <div className="weatherly">
      <Header />
      <Search setLocation={this.getAPIData.bind(this)} />
      <main>
        <Current />
        <h2>Forecast</h2>
        <hr />
        <Seven />
        <Ten />
      </main>
    </div>
  );
  }
}
