import constants from '../constants'

export function fetchPages() {
  return function(dispatch) {

    return fetch(constants.BASE_URL + 'pages/')
      .then(response =>
        response.json().then(json => ({ json, response }))
      ).then(({ json, response }) => {
        if (!response.ok) {
          dispatch(fetchPagesError(json.detail))
        }
        else {
          dispatch(fetchPagesSuccess(json))
        }
        return response

      }).catch(err => console.log(err))
  }
}

function fetchPagesSuccess(pageList) {
  return {
    type: constants.FETCH_PAGES_SUCCESS,
    isFetching: false,
    pageList: pageList
  }
}

function fetchPagesError(message) {
  return {
    type: constants.FETCH_PAGES_ERROR,
    isFetching: false,
    errorMessage: message
  }
}
