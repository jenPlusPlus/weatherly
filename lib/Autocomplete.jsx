import Trie from '../prefix-trie/scripts/Trie';
import React from 'react';
import Cities from './CityList';

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
  }
  selectWord(suggestion) {
    this.props.trie.select(suggestion);
    this.props.setSearchState(suggestion);
    this.props.getAPIData(suggestion);
    this.props.setSearchState('');
    this.setState({suggestions: []});
    this.props.suggestions = this.state.suggestions;
  }
  render() {
    return (
    <div className='suggestions'>
      <ul>
        {this.props.suggestions.map((suggestion) => {
          return (
            <li onClick={this.selectWord.bind(this, suggestion)}>
              {suggestion}
            </li>
          )
        })
        }
          </ul>
          </div>
        )
  }
}
