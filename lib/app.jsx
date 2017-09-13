import React from 'react';
import ReactDOM from 'react-dom';
import '../CSS/styles.css'

function Application() {
  return (
    <div className="weatherly">
      <header className="header">
        <h1>Weathrly</h1>
        <input className="search">Search</input>
      </header>

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

ReactDOM.render(<Application />, document.getElementById('container'));
