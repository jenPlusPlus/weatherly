import React, { Component } from 'react';
import Card from './Card';
import '../CSS/styles.css';


export default class Ten extends Component {
  constructor(props) {
    super(props);

    this.className = 'ten-day';
  }

  render() {
    return (
      <div className="ten-cards">
        {this.props.data.tenDay.map((hour, index) => {
          console.log(hour)
          return <Card data={hour} classType={this.className}/>
        })}
      </div>
    );
  }
}
