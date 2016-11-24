import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router'

import App from './components/App';
import Grid from './components/Grid'

import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      <IndexRoute component={Grid}/>

      <Route path="/:level0" component={Grid}/>
      <Route path="/:level0/:level1" component={Grid}/>
    </Route>
  </Router>
), document.getElementById('root'))
