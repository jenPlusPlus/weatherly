import React, { Component } from 'react';
import '../CSS/styles.css'


export default class Current extends Component {
  constructor () {
    super();
    this.state = {
      image:,
      condition:React.PropTypes.string.isRequired,
      high:,
      low:,
      temp:,
    }
  }

  render() {
    return (
      <section className="current">
        <img className="current-img"></img>
        <p className="current-condition"></p>
        <p className="current-high"></p>
        <p className="current-low"></p>
        <p className="current-temp"></p>
      </section>
    );
  }
}
