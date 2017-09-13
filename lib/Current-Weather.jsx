import React from 'react';
import '../CSS/styles.css'


export default function Current() {
  return (
    <section className="current">
      <img className="current-img"></img>
      <p className="current-condition"></p>
      <p className="current-high"></p>
      <p className="current-low"></p>
      <p className="current-temp"></p>
    </section>
  );
}
