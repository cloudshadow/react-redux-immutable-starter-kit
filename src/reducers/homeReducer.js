import Immutable from 'immutable';
import {
  GET_HOME_TITLE
} from '../actions/homeActions';

const initialState = Immutable.Map();

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_TITLE:
      return state.set('title', action.title);
    default:
      return state;
  }
};