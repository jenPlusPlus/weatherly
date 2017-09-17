import React, { Component } from 'react';
import '../CSS/styles.css'


export default class Seven extends Component {
  constructor() {
    super();
    this.state = {
      time: '',
      temp: '',
      image: '',
      condition: React.PropTypes.string.isRequired,
    }
  }

  render() {
    return (
      <section className="seven-hour">
        <p className="hour-time">7:00 pm</p>
        <p className="hour-temp">95°</p>
        <img className="hour-img"></img>
        <p className="hour-condition">Party Cloudy</p>
      </section>
    );
  }
}
