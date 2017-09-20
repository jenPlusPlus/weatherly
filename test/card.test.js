import React from 'react';
import Card from '../lib/Card';
import { shallow, mount } from 'enzyme';

describe('Card component', () => {
  const hourlyWeather = {
      hour: '9:00 AM',
      iconURL: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
      temp: '58.8',
  }

  const dailyWeather = {
      day: 'Tuesday',
      iconURL: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
      highTemp: '85',
      lowTemp: '50',
  }
  const shallowSevenCard = shallow(<Card data={hourlyWeather} classType='seven-hour' />)
  const shallowTenCard = shallow(<Card data={dailyWeather} classType='ten-day' />)


  it('should have a classType of seven-hour or ten-day', () => {
    expect(shallowSevenCard.props().children.props.className).toEqual('seven-hour');
  });

  it('should have a classType of seven-hour or ten-day', () => {
    expect(shallowTenCard.props().children.props.className).toEqual('ten-day');
  });

  it('ten-day cards should have a day', () => {
    const day = shallowTenCard.find('.ten-day-day');
    expect(day.text()).toEqual('Tuesday');
  });

  it('ten-day cards should have a low temp', () => {
    const day = shallowTenCard.find('.ten-day-low');
    expect(day.text()).toEqual('50');
  });

  it('ten-day cards should have a high temp', () => {
    const day = shallowTenCard.find('.ten-day-high');
    expect(day.text()).toEqual('85');
  });

  it('seven-hour cards should have an hour', () => {
    const hour = shallowSevenCard.find('.hour-time');
    expect(hour.text()).toEqual('9:00 AM');
  });

  it('seven-hour cards should have a temp', () => {
    const hour = shallowSevenCard.find('.hour-temp');
    expect(hour.text()).toEqual('58.8');
  });

});
