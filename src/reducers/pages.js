import constants from '../constants'

function pages(state = {}, action) {
  switch(action.type) {
    case constants.FETCH_PAGES_SUCCESS:
      console.log(constants.FETCH_PAGES_SUCCESS)
      return {...state, pageList: action.pageList, isFetching: false}
    case constants.FETCH_PAGES_ERROR:
      console.log(constants.FETCH_PAGES_ERROR)
      return {...state, errorMessage: action.errorMessage, isFetching: false}
    default:
      return state
  }
}

export default pages
