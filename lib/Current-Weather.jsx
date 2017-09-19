import React from 'react';
// import '../CSS/styles.css';


const Current = (props) => {

  return (
    <section className="current">
      <p className="current-city">{props.data.current.city}</p>
      <p className="current-condition">{ props.data.current.condition }</p>
      <p className="current-day">{props.data.current.day}</p>
      <p className="current-temp">{props.data.current.temp}</p>
      <p className="current-high">{props.data.current.highTemp}</p>
      <p className="current-low">{props.data.current.lowTemp}</p>
      <p className="current-summary">{props.data.current.summary}</p>
    </section>
  );
}

export default Current;
