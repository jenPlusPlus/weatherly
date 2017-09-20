import React from 'react'
import App from '../lib/App'
import Search from '../lib/Search'
import Current from '../lib/Current-Weather'
import Seven from '../lib/Seven-Hour'
import Ten from '../lib/Ten-Day'
import TenMock from '../__mock__/tendaymock'
import SevenMock from '../__mock__/sevenhourmock'
import CurrentMock from '../__mock__/currentmock'
import LocalStorageMock from '../__mock__/localstoragemock'
import { shallow, mount } from 'enzyme'
import API from '../lib/API'

describe('App', () => {
  let theApp
  let localStorage = new LocalStorageMock();
  let apiObj = new API('Denver')
  apiObj.current = CurrentMock
  apiObj.sevenHourForecast = SevenMock
  apiObj.tenDayForecast = TenMock

  beforeEach(() => {
    theApp = shallow(<App />)
  })

  it('should exist', () => {
    expect(theApp).toBeDefined()
  })

  it('should not display the weather data no data exists', () => {
    theApp.setState({apiData: undefined})
    expect(theApp.find(Current).exists()).toEqual(false)
    expect(theApp.find(Seven).exists()).toEqual(false)
    expect(theApp.find(Ten).exists()).toEqual(false)
  })

  it('should display the weather when data exists', () => {
    theApp.setState({apiData: apiObj})
    expect(theApp.find(Current).exists()).toEqual(true)
    expect(theApp.find(Seven).exists()).toEqual(true)
    expect(theApp.find(Ten).exists()).toEqual(true)
  })
})
