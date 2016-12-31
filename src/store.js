import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

const defaultState = {
  pages: {
    isFetching: false,
    lastFetched: Date.now(),
    pageList: [],
    errorMessage: ''
  }
}

const store = createStore(
  rootReducer,
  defaultState,
  compose(applyMiddleware(thunk))
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
