import constants from '../constants'

function pages(state = {}, action) {
  switch(action.type) {
    case constants.FETCH_PAGES_SUCCESS:
      console.log(constants.FETCH_PAGES_SUCCESS)
      break;
    case constants.FETCH_PAGES_ERROR:
      console.log(constants.FETCH_PAGES_ERROR)
      break;
    default:
      return state
  }
}

export default pages
