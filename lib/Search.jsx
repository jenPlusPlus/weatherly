import React from 'react';
import API from './API';
import '../CSS/styles.css'


export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
    this.runSearch = this.runSearch.bind(this);
  }
  runSearch() {
    console.log('running search');
    console.log(this.props.searchTerm);
    this.props.getAPIData(this.state.input);
  }
  setTheState(searchTerm) {
    console.log('setting the state');
    this.setState({ input: searchTerm });
  }
  render() {
    return (
    <div>
      <input type="search" className="search" value={this.state.input} onChange={(event) => this.setTheState(event.target.value)} placeholder="Search for a city or zip code"></input>
      <button type="submit" onClick={this.runSearch}></button>
    </div>
  );}
}
