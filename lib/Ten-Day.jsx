import React, { Component } from 'react';
import '../CSS/styles.css'


export default class Ten extends Component {
  constructor() {
    super();
    this.state = {
      day:,
      image:,
      condition: React.PropTypes.string.isRequired,
      high:,
      low:,
    }
  }
  render() {
    return (
      <section className="ten-day">
        <p className="ten-day-day"></p>
        <img className="ten-day-img"></img>
        <p className="ten-day-condition"></p>
        <p className="ten-day-high"></p>
        <p className="ten-day-low"></p>
      </section>
    );
  }
}
