import React, { Component } from 'react';
import '../CSS/styles.css';


export default class Seven extends Component {
  constructor(props) {
    super(props);

    this.className = "seven-hour";
  }

  render() {
    return (
      <section className="seven-hour">
        <p className="hour-time">{this.props.data.sevenHour[0].hour}</p>
        <p className="hour-temp">{this.props.data.sevenHour[0].temp}</p>
        {/* <img className="hour-img">{this.props.data.sevenHour[0].iconURL}</img> */}
      </section>
    );
  }
}
