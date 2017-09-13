import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import API from './API';

let api = new API(80204);
api.getForecast();
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
