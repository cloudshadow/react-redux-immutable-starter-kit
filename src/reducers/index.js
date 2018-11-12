import { combineReducers } from 'redux-immutable';
import homeState from './homeReducer';
import { routerReducer } from './routerReducer';

const rootReducer = combineReducers({
  homeState,
  router: routerReducer
});

export default rootReducer;
