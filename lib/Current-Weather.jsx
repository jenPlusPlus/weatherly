import React from 'react';
import '../CSS/styles.css';


const Current = (props) => {

  return (
    <section className="current">
      <img className="current-img"></img>
      <p className="current-condition">Condition: { props.data.current.condition }</p>
      <p className="current-high">{props.data.current.highTemp}</p>
      <p className="current-low">{props.data.current.lowTemp}</p>
      <p className="current-temp">{props.data.current.temp}</p>
    </section>
  );
}

export default Current;
