/* eslint-disable */
import Immutable from 'immutable';
import {
  TEMP
} from '../actions/templateActions';

const initialState = Immutable.Map();

export default (state = initialState, action) => {
  switch (action.type) {
    case TEMP:
      return state.set('temp', action.temp);
    default:
      return state;
  }
};