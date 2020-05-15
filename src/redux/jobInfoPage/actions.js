import API from '../../apis';
import { action, generateErrorAction } from '../actions';
import actionTypes from './actionTypes';

export const jobInfoPage = () => {
  // const request = () => {
  //   return dispatch => {
  //     dispatch(loading());
  //     return API.changePassword
  //       .changePassword()
  //       .then(res => dispatch(success(res)))
  //       .catch(err => {
  //         dispatch(
  //           generateErrorAction(err, {
  //             failure: actionTypes.CHANGE_PASSWORD_FAILED,
  //             reject: actionTypes.CHANGE_PASSWORD_REJECT
  //           })
  //         );
  //         // throw err;
  //       });
  //   };
  // };
  // const loading = () => action(actionTypes.CHANGE_PASSWORD_LOADING);
  // const success = res => action(actionTypes.CHANGE_PASSWORD_SUCCESSFULLY, res);
  // return request();
};