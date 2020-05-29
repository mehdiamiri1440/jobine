import API from '../../apis';
import { action, generateErrorAction } from '../actions';
import actionTypes from './actionTypes';

export const sendVerificationCode = (mobileNumber, password, role) => {
    const request = () => {
        return dispatch => {
            dispatch(loading());
            return API.auth
                .sendVerificationCode(mobileNumber, password, role)
                .then(res => dispatch(success(res)))
                .catch(err => {
                    dispatch(
                        generateErrorAction(err, {
                            failure: actionTypes.SEND_VERIFICATION_CODE_FAILED,
                            reject: actionTypes.SEND_VERIFICATION_CODE_REJECT
                        })
                    );
                    // throw err;
                });
        };
    };
    const loading = () => action(actionTypes.SEND_VERIFICATION_CODE_LOADING);
    const success = res => action(actionTypes.SEND_VERIFICATION_CODE_SUCCESSFULLY, res);
    return request();
};

export const validateVerificationCode = (mobileNumber, code) => {
    const request = () => {
        return dispatch => {
            dispatch(loading());
            return API.auth
                .validateVerificationCode(mobileNumber, code)
                .then(res => dispatch(success(res)))
                .catch(err => {
                    dispatch(
                        generateErrorAction(err, {
                            failure: actionTypes.VALIDATE_VERIFICATION_CODE_FAILED,
                            reject: actionTypes.VALIDATE_VERIFICATION_CODE_REJECT
                        })
                    );
                    // throw err;
                });
        };
    };
    const loading = () => action(actionTypes.VALIDATE_VERIFICATION_CODE_LOADING);
    const success = res => action(actionTypes.VALIDATE_VERIFICATION_CODE_SUCCESSFULLY, res);
    return request();
};