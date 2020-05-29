import { combineReducers } from 'redux';
import changePasswordReducer from './changePassword/reducer';
import jobInfoPageReducer from './jobInfoPage/reducer';
import homePageReducer from './homePage/reducer';
import authReducer from './auth/reducer';

export default combineReducers({
  changePasswordReducer,
  jobInfoPageReducer,
  homePageReducer,
  authReducer,
});
