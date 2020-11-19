import produce from 'immer';
import { GET_HOME_TITLE } from '../actions/homeActions';

const initialState = {
  title: null,
  error: null,
  token: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_TITLE:
      return produce(state, (draftState) => {
        draftState.title = action.title;
      });
    default:
      return state;
  }
};
