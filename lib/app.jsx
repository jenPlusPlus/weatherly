import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import Header from './Header';
import Current from './Current-Weather';
import Seven from './Seven-Hour';
import Ten from './Ten-Day';
import '../CSS/styles.css';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: undefined,
    }
  }

  render() {
    return (
    <div className="weatherly">
      <Header />
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
