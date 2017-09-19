import React from 'react';
import Current from '../lib/Current-Weather';
import { shallow, mount } from 'enzyme';

describe('Seven Day component', () => {
  const currentWeather = {
      sevenHour: [{
      hour: '9:00 AM',
      iconURL: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
      temp: '58.8',
    },
    {
      hour: '10:00 AM',
      iconURL: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
      temp: '70',
    },
    {
      hour: '11:00 AM',
      iconURL: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
      temp: '74',
    },{
      hour: '12:00 PM',
      iconURL: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
      temp: '79',
    },
    {
      hour: '1:00 PM',
      iconURL: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
      temp: '81',
    },
    {
      hour: '2:00 PM',
      iconURL: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
      temp: '83',
    },
    {
      hour: '3:00 AM',
      iconURL: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
      temp: '84',
    }]
  }
  const shallowCurrent = shallow(<Seven data={currentWeather} />)

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
