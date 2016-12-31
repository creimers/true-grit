import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators';

import App from '../components/App'

const mapStateToProps = (state) => {
  return {
    pages: state.pageList
  }
}

const mapDispatchedProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

const AppContainer = connect(mapStateToProps, mapDispatchedProps)(App)
export default AppContainer
