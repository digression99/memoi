import { combineReducers } from 'redux';
import memos from './memos';
import groups from './groups';

export default combineReducers({
  memos,
  groups
})