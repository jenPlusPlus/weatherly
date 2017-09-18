import React, { Component } from 'react';
import '../CSS/styles.css';


export default class Ten extends Component {
  constructor(props) {
    super(props);

    this.className = 'ten-day';
  }

  render() {
    return (
      <section className="ten-day">
        <p className="ten-day-day">{this.props.data.tenDay[0].day}</p>
        {/* <img className="ten-day-img">{this.props.data.tenDay[0].iconURL}</img> */}
        <p className="ten-day-high">{this.props.data.tenDay[0].highTemp}</p>
        <p className="ten-day-low">{this.props.data.tenDay[0].lowTemp}</p>
      </section>
    );
  }
}
