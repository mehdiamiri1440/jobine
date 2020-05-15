import { combineReducers } from 'redux';
import changePasswordReducer from './changePassword/reducer';
import jobInfoPageReducer from './jobInfoPage/reducer';

export default combineReducers({
  changePasswordReducer,
  jobInfoPageReducer,
});
