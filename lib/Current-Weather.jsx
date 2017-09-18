import React, { Component } from 'react';
import '../CSS/styles.css'


export default class Current extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="current">
        <p className="current-city">City: { this.props.data.current.city }</p>
        <p className="current-condition">Condition: { this.props.data.current.condition }</p>
        <p className="current-temp">Temp: { this.props.data.current.temp }</p>
        <p className="current-high">High: { this.props.data.current.highTemp }</p>
        <p className="current-low">Low: { this.props.data.current.lowTemp }</p>
        <p className="current-summary">Summary: { this.props.data.current.summary }</p>
      </section>
    );
  }
}
