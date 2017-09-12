import React from 'react';
import ReactDOM from 'react-dom';

function Application() {
  return (
    <div className="weatherly">
      <header className="header">
        <h1>Weathrly</h1>
        <input className="search"></input>
      </header>

      <main>
        <h2>Current</h2>
        <hr />
        <section className="current"></section>
        <h2>Forecast</h2>
        <hr />
        <section className="by-hour"></section>
        <section className="ten-day"></section>
      </main>
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById('container'));
