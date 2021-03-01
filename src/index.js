import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css'

import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import history from "./services/history"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
 
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

