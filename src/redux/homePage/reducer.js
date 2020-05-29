import actionTypes from './actionTypes';

const INITIAL_STATE = {
  tally:{
    numberOfJobTitle:2432,
    numberOfRegisteredEmployer:884,
    numberOfRegisteredApplicant:1049,
    numberOfSuccessfulEmployment:745,
  }
  
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case actionTypes.CHANGE_PASSWORD_LOADING: {
    //   return {
    //     ...state,
    //     changePasswordLoading: true,
    //     changePasswordFailed: false,
    //     changePasswordError: false,
    //     changePasswordMessage: null,
    //     changePasswordStatus: {}
    //   };
    // };
    default:
      return state;
  }
};
