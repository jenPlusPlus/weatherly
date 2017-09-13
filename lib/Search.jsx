import React from 'react';
import '../CSS/styles.css'


export default function Search() {
  return (
    <div>
      <input type="search" className="search" placeholder="Search for a city or zip code"></input>
      <button type="submit">Search</button>
    </div>
  );
}
