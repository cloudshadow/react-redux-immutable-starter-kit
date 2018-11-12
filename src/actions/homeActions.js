import 'es6-promise/auto'; //import es6-promise for ie
import axios from 'axios';
import urlHelper from '../utils/urlHelper';

export const GET_HOME_TITLE = 'GET_HOME_TITLE';

// example of a thunk using the redux-thunk middleware
export function getTitle() {
  return dispatch => {
    axios.get(urlHelper.t('title')).then(response => {
      const {data: title} = response;
      dispatch({type: GET_HOME_TITLE,title});
    });
  };
}