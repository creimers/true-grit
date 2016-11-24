import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import App from './components/App';

import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      <Route path="/:level0" component={App}/>
      <Route path="/:level0/:level1" component={App}/>
    </Route>
  </Router>
), document.getElementById('root'))
