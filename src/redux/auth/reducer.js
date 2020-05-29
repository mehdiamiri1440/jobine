import actionTypes from './actionTypes';

const INITIAL_STATE = {

    sendVerificationCodeLoading: false,
    sendVerificationCodeFailed: false,
    sendVerificationCodeError: false,
    sendVerificationCodeMessage: null,

    validateVerificationCodeLoading: false,
    validateVerificationCodeFailed: false,
    validateVerificationCodeError: false,
    validateVerificationCodeMessage: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SEND_VERIFICATION_CODE_LOADING: {
            return {
                ...state,
                sendVerificationCodeLoading: true,
                sendVerificationCodeFailed: false,
                sendVerificationCodeError: false,
                sendVerificationCodeMessage: null,
            };
        };
        case actionTypes.SEND_VERIFICATION_CODE_REJECT: {
            return {
                ...state,
                sendVerificationCodeLoading: false,
                sendVerificationCodeFailed: false,
                sendVerificationCodeError: true,
                sendVerificationCodeMessage: action.payload,
            };
        };
        case actionTypes.SEND_VERIFICATION_CODE_FAILED: {
            const { message } = action.payload;
            return {
                ...state,
                sendVerificationCodeLoading: false,
                sendVerificationCodeFailed: true,
                sendVerificationCodeError: false,
                sendVerificationCodeMessage: message,
            };
        };
        case actionTypes.SEND_VERIFICATION_CODE_SUCCESSFULLY: {
            return {
                ...state,
                sendVerificationCodeLoading: false,
                sendVerificationCodeFailed: false,
                sendVerificationCodeError: false,
                sendVerificationCodeMessage: null,
            };
        };


        case actionTypes.VALIDATE_VERIFICATION_CODE_LOADING: {
            return {
                ...state,
                validateVerificationCodeLoading: true,
                validateVerificationCodeFailed: false,
                validateVerificationCodeError: false,
                validateVerificationCodeMessage: null,
            };
        };
        case actionTypes.VALIDATE_VERIFICATION_CODE_REJECT: {
            return {
                ...state,
                validateVerificationCodeLoading: false,
                validateVerificationCodeFailed: false,
                validateVerificationCodeError: true,
                validateVerificationCodeMessage: action.payload,
            };
        };
        case actionTypes.VALIDATE_VERIFICATION_CODE_FAILED: {
            const { message } = action.payload;
            return {
                ...state,
                validateVerificationCodeLoading: false,
                validateVerificationCodeFailed: true,
                validateVerificationCodeError: false,
                validateVerificationCodeMessage: message,
            };
        };
        case actionTypes.VALIDATE_VERIFICATION_CODE_SUCCESSFULLY: {
            return {
                ...state,
                validateVerificationCodeLoading: false,
                validateVerificationCodeFailed: false,
                validateVerificationCodeError: false,
                validateVerificationCodeMessage: null,
            };
        };
        default:
            return state;
    }
};
