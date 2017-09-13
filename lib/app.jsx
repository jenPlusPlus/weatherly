import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import '../CSS/styles.css';


export default function App() {
  return (
    <div className="weatherly">
      <Header />
      <main>
        <h2>Current</h2>
        <hr />
        <section className="current">98 degrees</section>
        <h2>Forecast</h2>
        <hr />
        <section className="by-hour">78 degrees</section>
        <section className="ten-day">50 degrees</section>
      </main>
    </div>
  );
}
