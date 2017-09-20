import Trie from '../prefix-trie/scripts/Trie';
import React from 'react';
import Cities from './CityList';

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
  }
  selectWord(suggestion) {
    // this.props.trie.select(suggestion);
    document.querySelector('.search').value = suggestion;
    document.querySelector('.search').focus();
  }
  render() {
    return (
    <div className='suggestions'>
      <ul>
        {this.props.suggestions.map((suggestion) => {
          return (
            <li onClick={this.selectWord(suggestion)}>
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
