import React from 'react';
import Current from '../lib/Current-Weather';
import { shallow, mount } from 'enzyme';

describe('Current component', () => {
  const currentWeather = {
      current: {
      city: 'Denver, CO',
      condition: 'Partly Cloudy',
      day: 'Tuesday',
      highTemp: '85',
      lowTemp: '50',
      summary: 'A mix of clouds and sun. High near 85F. S winds shifting to W at 10 to 20 mph.',
      temp: '58.8',
      }
  }
  const shallowCurrent = shallow(<Current data={currentWeather} />)

  it('should display a city', () => {
    const city = shallowCurrent.find('.current-city');

    expect(city.text()).toEqual(currentWeather.current.city);
  });

  it('should display the condition', () => {
    const condition = shallowCurrent.find('.current-condition');

    expect(condition.text()).toEqual(currentWeather.current.condition);
  });

  it('should display the day', () => {
    const day = shallowCurrent.find('.current-day');

    expect(day.text()).toEqual(currentWeather.current.day);
  });

  it('should display the current temperature', () => {
    const temp = shallowCurrent.find('.current-temp');

    expect(temp.text()).toEqual(currentWeather.current.temp);
  });

  it('should display high temp', () => {
    const high = shallowCurrent.find('.current-high');

    expect(high.text()).toEqual(currentWeather.current.highTemp);
  });

  it('should display low temp', () => {
    const low = shallowCurrent.find('.current-low');

    expect(low.text()).toEqual(currentWeather.current.lowTemp);
  });

  it('should display summary', () => {
    const summary = shallowCurrent.find('.current-summary');

    expect(summary.text()).toEqual(currentWeather.current.summary);
  });
});
