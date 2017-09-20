import React from 'react';
import Ten from '../lib/Ten-Day';
import { shallow, mount } from 'enzyme';

describe('Ten Day component', () => {
  const currentWeather = {
      tenDay: [{
      day: 'Tuesday',
      iconURL: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
      highTemp: '85',
      lowTemp: '50',
    },
    {
      day: 'Wednesday',
      iconURL: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
      highTemp: '81',
      lowTemp: '57',
    },
    {
      day: 'Thursday',
      iconURL: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
      highTemp: '88',
      lowTemp: '57',
    },{
      day: 'Friday',
      iconURL: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
      highTemp: '79',
      lowTemp: '50',
    },
    {
      day: 'Saturday',
      iconURL: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
      highTemp: '64',
      lowTemp: '46',
    },
    {
      day: 'Sunday',
      iconURL: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
      highTemp: '57',
      lowTemp: '44',
    },
    {
      day: 'Monday',
      iconURL: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
      highTemp: '59',
      lowTemp: '43',
    },
    {
      day: 'Tuesday',
      iconURL: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
      highTemp: '65',
      lowTemp: '45',
    },
    {
      day: 'Wednesday',
      iconURL: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
      highTemp: '67',
      lowTemp: '45',
    },
    {
      day: 'Thursday',
      iconURL: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
      highTemp: '68',
      lowTemp: '47',
    }]
  }
  const mountTenDay = mount(<Ten data={currentWeather} />)
  const cards = mountTenDay.find('Card');

  it('should display ten cards', () => {
    expect(cards.nodes.length).toEqual(10);
  });

  it('should have day on cards', () => {

      expect(cards.nodes[0].props.data.day).toEqual(currentWeather.tenDay[0].day);
      expect(cards.nodes[1].props.data.day).toEqual(currentWeather.tenDay[1].day);
      expect(cards.nodes[2].props.data.day).toEqual(currentWeather.tenDay[2].day);
      expect(cards.nodes[3].props.data.day).toEqual(currentWeather.tenDay[3].day);
      expect(cards.nodes[4].props.data.day).toEqual(currentWeather.tenDay[4].day);
      expect(cards.nodes[5].props.data.day).toEqual(currentWeather.tenDay[5].day);
      expect(cards.nodes[6].props.data.day).toEqual(currentWeather.tenDay[6].day);
      expect(cards.nodes[7].props.data.day).toEqual(currentWeather.tenDay[7].day);
      expect(cards.nodes[8].props.data.day).toEqual(currentWeather.tenDay[8].day);
      expect(cards.nodes[9].props.data.day).toEqual(currentWeather.tenDay[9].day);

  });

  it('should have an icon cards', () => {

      expect(cards.nodes[0].props.data.iconURL).toEqual(currentWeather.tenDay[0].iconURL);
      expect(cards.nodes[1].props.data.iconURL).toEqual(currentWeather.tenDay[1].iconURL);
      expect(cards.nodes[2].props.data.iconURL).toEqual(currentWeather.tenDay[2].iconURL);
      expect(cards.nodes[3].props.data.iconURL).toEqual(currentWeather.tenDay[3].iconURL);
      expect(cards.nodes[4].props.data.iconURL).toEqual(currentWeather.tenDay[4].iconURL);
      expect(cards.nodes[5].props.data.iconURL).toEqual(currentWeather.tenDay[5].iconURL);
      expect(cards.nodes[6].props.data.iconURL).toEqual(currentWeather.tenDay[6].iconURL);
      expect(cards.nodes[7].props.data.iconURL).toEqual(currentWeather.tenDay[7].iconURL);
      expect(cards.nodes[8].props.data.iconURL).toEqual(currentWeather.tenDay[8].iconURL);
      expect(cards.nodes[9].props.data.iconURL).toEqual(currentWeather.tenDay[9].iconURL);

  });

  it('should have a high temperature on cards', () => {

    expect(cards.nodes[0].props.data.highTemp).toEqual(currentWeather.tenDay[0].highTemp);
    expect(cards.nodes[1].props.data.highTemp).toEqual(currentWeather.tenDay[1].highTemp);
    expect(cards.nodes[2].props.data.highTemp).toEqual(currentWeather.tenDay[2].highTemp);
    expect(cards.nodes[3].props.data.highTemp).toEqual(currentWeather.tenDay[3].highTemp);
    expect(cards.nodes[4].props.data.highTemp).toEqual(currentWeather.tenDay[4].highTemp);
    expect(cards.nodes[5].props.data.highTemp).toEqual(currentWeather.tenDay[5].highTemp);
    expect(cards.nodes[6].props.data.highTemp).toEqual(currentWeather.tenDay[6].highTemp);
    expect(cards.nodes[7].props.data.highTemp).toEqual(currentWeather.tenDay[7].highTemp);
    expect(cards.nodes[8].props.data.highTemp).toEqual(currentWeather.tenDay[8].highTemp);
    expect(cards.nodes[9].props.data.highTemp).toEqual(currentWeather.tenDay[9].highTemp);

  });

  it('should have a low temperature on cards', () => {

    expect(cards.nodes[0].props.data.lowTemp).toEqual(currentWeather.tenDay[0].lowTemp);
    expect(cards.nodes[1].props.data.lowTemp).toEqual(currentWeather.tenDay[1].lowTemp);
    expect(cards.nodes[2].props.data.lowTemp).toEqual(currentWeather.tenDay[2].lowTemp);
    expect(cards.nodes[3].props.data.lowTemp).toEqual(currentWeather.tenDay[3].lowTemp);
    expect(cards.nodes[4].props.data.lowTemp).toEqual(currentWeather.tenDay[4].lowTemp);
    expect(cards.nodes[5].props.data.lowTemp).toEqual(currentWeather.tenDay[5].lowTemp);
    expect(cards.nodes[6].props.data.lowTemp).toEqual(currentWeather.tenDay[6].lowTemp);
    expect(cards.nodes[7].props.data.lowTemp).toEqual(currentWeather.tenDay[7].lowTemp);
    expect(cards.nodes[8].props.data.lowTemp).toEqual(currentWeather.tenDay[8].lowTemp);
    expect(cards.nodes[9].props.data.lowTemp).toEqual(currentWeather.tenDay[9].lowTemp);

  });
});
