import React from 'react';
import Seven from '../lib/Seven-Hour';
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
  const mountSevenHour = mount(<Seven data={currentWeather} />)
  const cards = mountSevenHour.find('Card');

  it('should display seven cards', () => {
    expect(cards.nodes.length).toEqual(7);
  });

  it('should have hour on cards', () => {

      expect(cards.nodes[0].props.data.hour).toEqual(currentWeather.sevenHour[0].hour);
      expect(cards.nodes[1].props.data.hour).toEqual(currentWeather.sevenHour[1].hour);
      expect(cards.nodes[2].props.data.hour).toEqual(currentWeather.sevenHour[2].hour);
      expect(cards.nodes[3].props.data.hour).toEqual(currentWeather.sevenHour[3].hour);
      expect(cards.nodes[4].props.data.hour).toEqual(currentWeather.sevenHour[4].hour);
      expect(cards.nodes[5].props.data.hour).toEqual(currentWeather.sevenHour[5].hour);
      expect(cards.nodes[6].props.data.hour).toEqual(currentWeather.sevenHour[6].hour);

  });

  // it('should have an icon cards', () => {
  //
  //     expect(cards.nodes[0].props.data.iconURL).toEqual(currentWeather.sevenHour[0].iconURL);
  //     expect(cards.nodes[1].props.data.iconURL).toEqual(currentWeather.sevenHour[1].iconURL);
  //     expect(cards.nodes[2].props.data.iconURL).toEqual(currentWeather.sevenHour[2].iconURL);
  //     expect(cards.nodes[3].props.data.iconURL).toEqual(currentWeather.sevenHour[3].iconURL);
  //     expect(cards.nodes[4].props.data.iconURL).toEqual(currentWeather.sevenHour[4].iconURL);
  //     expect(cards.nodes[5].props.data.iconURL).toEqual(currentWeather.sevenHour[5].iconURL);
  //     expect(cards.nodes[6].props.data.iconURL).toEqual(currentWeather.sevenHour[6].iconURL);
  //
  // });

  it('should have a temperature on cards', () => {

      expect(cards.nodes[0].props.data.temp).toEqual(currentWeather.sevenHour[0].temp);
      expect(cards.nodes[1].props.data.temp).toEqual(currentWeather.sevenHour[1].temp);
      expect(cards.nodes[2].props.data.temp).toEqual(currentWeather.sevenHour[2].temp);
      expect(cards.nodes[3].props.data.temp).toEqual(currentWeather.sevenHour[3].temp);
      expect(cards.nodes[4].props.data.temp).toEqual(currentWeather.sevenHour[4].temp);
      expect(cards.nodes[5].props.data.temp).toEqual(currentWeather.sevenHour[5].temp);
      expect(cards.nodes[6].props.data.temp).toEqual(currentWeather.sevenHour[6].temp);

  });


});
