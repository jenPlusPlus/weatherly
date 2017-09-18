import React from 'react';

const Card = (props) => {

  return (
    // Use className={props.cardType} to have conditional rendering for each card
    <div className={props.className}>
      {/* <h3 className="time">Time</h3>
      <img className="weatherIcon"></img>
      <p className="lowTemp">Low Temp</p>
      <p className="highTemp">High Temp</p> */}
      <p className="day">{props.data.tenDay.day}</p>
      <img className="img">{props.data.tenDay.iconURL}</img>
      <p className="temp">{props.data.sevenHour.temp}</p>
      <p className="high">{props.data.sevenHour.highTemp}</p>
      <p className="low">{props.data.sevenHour.lowTemp}</p>
    </div>
  );
};

export default Card;
