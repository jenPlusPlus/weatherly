import React from 'react';
import API from './API';
import Autocomplete from './Autocomplete';


export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.runSearch = this.runSearch.bind(this);
    this.trie = this.props.prefixTrie;
    this.suggestions = [];
  }
  runSearch() {
    console.log('running search');
    this.props.getAPIData(this.state.input);
  }
  setTheState(searchTerm) {
    console.log('setting the state');
    this.setState({ input: searchTerm });
    this.suggestions = this.trie.suggest(this.state.input);

  }
  render() {
    return (
    <div>
      <input type="search" className="search" value={this.state.input} onChange={(event) => this.setTheState(event.target.value)} placeholder="Search for a city or zip code"></input>
      <button type="submit" onClick={this.runSearch}>Search</button>
      <Autocomplete suggestions={this.suggestions} trie={this.trie}/>
    </div>
  );}
}
