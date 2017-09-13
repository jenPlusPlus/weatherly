import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import API from './API';

let api = new API;
api.getForecast();
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
