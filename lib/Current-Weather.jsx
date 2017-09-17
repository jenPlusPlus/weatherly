import React, { Component } from 'react';
import '../CSS/styles.css'


export default class Current extends Component {
  constructor() {
    super();
    this.state = {
      image: '',
      condition: '',
      high: '',
      low: '',
      temp: '',
    }
  }

  render() {
    return (
      <section className="current">
        <img className="current-img"></img>
        <p className="current-condition">Partly Cloudy</p>
        <p className="current-high">99°</p>
        <p className="current-low">77°</p>
        <p className="current-temp">88°</p>
      </section>
    );
  }
}
