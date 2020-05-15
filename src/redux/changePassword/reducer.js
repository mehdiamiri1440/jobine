import actionTypes from './actionTypes';

const INITIAL_STATE = {
  changePasswordLoading: false,
  changePasswordFailed: false,
  changePasswordError: false,
  changePasswordMessage: null,
  changePasswordMessages: [],
  changePasswordStatus: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PASSWORD_LOADING: {
      return {
        ...state,
        changePasswordLoading: true,
        changePasswordFailed: false,
        changePasswordError: false,
        changePasswordMessage: null,
        changePasswordStatus: {}
      };
    };
    case actionTypes.CHANGE_PASSWORD_REJECT: {
      return {
        ...state,
        changePasswordLoading: false,
        changePasswordFailed: false,
        changePasswordError: true,
        changePasswordMessage: null,
        changePasswordStatus: {}
      };
    };
    case actionTypes.CHANGE_PASSWORD_FAILED: {
      const { message, errors } = action.payload;
      return {
        ...state,
        changePasswordLoading: false,
        changePasswordFailed: true,
        changePasswordError: false,
        changePasswordMessage: message,
        changePasswordMessages: errors || [],
        changePasswordStatus: {}
      };
    };
    case actionTypes.CHANGE_PASSWORD_SUCCESSFULLY: {
      return {
        ...state,
        changePasswordLoading: false,
        changePasswordFailed: false,
        changePasswordError: false,
        changePasswordMessage: null,
        changePasswordStatus: { ...action.payload }
      };
    };
    default:
      return state;
  }
};
