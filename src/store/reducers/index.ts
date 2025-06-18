import { combineReducers } from 'redux';
import AuthReducer from './Auth';
import MasterReducer from './Master';

export default combineReducers({
  Master: MasterReducer,
  Auth: AuthReducer,
});
