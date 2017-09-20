import React from 'react';

const Card = (props) => {
  let cardType = props.classType
  // console.log(props.data.sevenHour)

  let returnVariable = (cardType === 'ten-day' ?
     <section className={props.classType}>
       <p className="ten-day-day">{props.data.day}</p>
       <img src={props.data.iconURL} className="ten-day-img" />
       <p className="ten-day-high">{props.data.highTemp}</p>
       <p className="ten-day-low">{props.data.lowTemp}</p>
     </section>
     :
     <section className={props.classType}>
       <p className="hour-time">{props.data.hour}</p>
       <p className="hour-temp">{props.data.temp}</p>
       <img src={props.data.iconURL} className="hour-img" />
     </section>
  );


  return (
    <div>
      {returnVariable}
    </div>
  );
};

export default Card;
