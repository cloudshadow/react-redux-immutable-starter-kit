import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import homeState from './homeReducer';

const createRootReducer = (history) =>
  combineReducers({
    homeState,
    router: connectRouter(history),
  });

export default createRootReducer;
