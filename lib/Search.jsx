import React from 'react';
import '../CSS/styles.css'


export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }
  runSearch(){

  }
  render() {
    return (
    <div>
      <input type="search" className="search" placeholder="Search for a city or zip code"></input>
      <button type="submit" onClick={this.runSearch}>Search</button>
    </div>
  );}
}
