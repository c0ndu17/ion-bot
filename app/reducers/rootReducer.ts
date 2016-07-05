import {combineReducers} from 'redux-immutable';

import currentUser from './currentUser';
import searchHistory from './searchHistory';

const rootReducer = combineReducers({
  currentUser,
  searchHistory,
});

export default rootReducer;
