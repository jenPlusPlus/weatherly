import React, { Component } from 'react';
import Card from './Card';


export default class Seven extends Component {
  constructor(props) {
    super(props);

    this.className = "seven-hour";
  }

  render() {
    return (
      <div className="hour-cards">
        {this.props.data.sevenHour.map((hour, index) => {
          return <Card data={hour} classType={this.className}/>
        })}
      </div>

      // <section className="seven-hour">
      //   <p className="hour-time">{this.props.data.sevenHour[0].hour}</p>
      //   <p className="hour-temp">{this.props.data.sevenHour[0].temp}</p>
      //   {/* <img className="hour-img">{this.props.data.sevenHour[0].iconURL}</img> */}
      // </section>
    );
  }
}
