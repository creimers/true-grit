import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators';

import App from '../components/App'

const findPageOfSlug = (pageList, slug) => {
  return pageList.find((page) => page.absolute_url === slug)
}

const findChildrenOfCurrentPage = (pageList, currentPage) => {
  return currentPage.children.map((childId) => {
    return pageList.find((page) => page.id === childId)
  })
}

const mapStateToProps = (state) => {
  const currentSlug = state.routing.locationBeforeTransitions.pathname
  const currentPage = findPageOfSlug(state.pages.pageList, currentSlug)

  let mappedState = {currentPage}

  if(currentPage) {
    const children = findChildrenOfCurrentPage(state.pages.pageList, currentPage)
    mappedState.children = children
  }
  else {
    mappedState.children = []
  }

  return mappedState
}

const mapDispatchedProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

const AppContainer = connect(mapStateToProps, mapDispatchedProps)(App)
export default AppContainer
