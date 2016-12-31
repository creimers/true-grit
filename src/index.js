import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router'
import { Provider  } from 'react-redux';

import AppContainer from './containers/AppContainer';

import './index.css';
import store, { history } from './store'


ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/*" component={AppContainer}>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
