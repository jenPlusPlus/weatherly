import React, { Component } from 'react';
import '../CSS/styles.css'


export default class Current extends Component {
  constructor (props) {
    super(props);
    this.state = {
      city: props.data.current.city,
      condition: props.data.current.condition,
      day: props.data.current.day,
      temp: props.data.current.temp,
      high: props.data.current.highTemp,
      low: props.data.current.lowTemp,
      summary: props.data.current.summary,
    }
  }
  render() {
    // let apiData = this.props.data;
    return (
      <section className="current">
        <img className="current-img"></img>
        <p className="current-condition">Condition: { this.state.condition }</p>
        <p className="current-high"></p>
        <p className="current-low"></p>
        <p className="current-temp"></p>
      </section>
    );
  }
}
