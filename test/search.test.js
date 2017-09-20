import React from 'react';
import Search from '../lib/Search';
import API from '../lib/API';
import TenMock from '../__mock__/tendaymock'
import SevenMock from '../__mock__/sevenhourmock'
import CurrentMock from '../__mock__/currentmock'
import Trie from '../prefix-trie/scripts/Trie';
import Cities from './CityList';
import { shallow, mount } from 'enzyme';

let theSearch
let apiObj = new API('Denver')
apiObj.current = CurrentMock
apiObj.sevenHourForecast = SevenMock
apiObj.tenDayForecast = TenMock

describe('Search functionality with shallow', () => {

  beforeEach(() => {
    theSearch = shallow(
      <Search />
    );
  });

  it('should render a Search component', () => {
    expect(theSearch.find('.search').length).toEqual(1);
  });

  it('should render an input box', () => {
    expect(theSearch.find('input')).toBeDefined();
  });

  it('should render a button', () => {
    expect(theSearch.find('button')).toBeDefined()
  });
});

describe('Search functionality with mount', () => {
  let theSearch;
  beforeEach(() => {
    theSearch = mount(
      <Search getAPIData={apiObj}/>
    );
  });

  it('should have default state', () => {
    expect(theSearch.state('input')).toEqual('');
  });

  it('should change state of Search when input is received', () => {
    const userInput = theSearch.find('input');
    const trie = new Trie;
    trie.populate(Cities);
    expect(theSearch.state('input')).toEqual('');
    const newInput = { target: { value: 'Denver' } };

    userInput.simulate('change', newInput);
    expect(theSearch.state('input')).toEqual('Denver');
  });

  it('should fire a function on button click', () => {
    const ghostFunction = jest.fn();
    theSearch = mount(<Search getAPIData={ghostFunction}/>);
    const userButton = theSearch.find('button');

    userButton.simulate('click');

    expect(ghostFunction).toHaveBeenCalledTimes(1);
  });
});
