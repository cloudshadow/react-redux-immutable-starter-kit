/**
 * This custom reducer make react-router-redux work with immutable.js
 * https://github.com/gajus/redux-immutable
 */
import {
  Map
} from 'immutable';
import {
  LOCATION_CHANGE
} from 'react-router-redux';

const initialState = Map({
  location: null,
  action: null
});

export function routerReducer(state = initialState, { type, payload = {} } = {}) {
  if (type === LOCATION_CHANGE) {
    const location = payload.location || payload;
    const action = payload.action;

    return state
      .set('location', location)
      .set('action', action);
  }

  return state;
}