import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App.jsx';
import configureStore from './redux/configureStore';
import locales from '../locales/index';
import './assets/libraries/fontawesome/fontawesome.css';
import './assets/libraries/fontawesome/regular';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/index.scss';

locales.setActiveLanguage('fa-ir');
global.locales = locales.localize;

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
