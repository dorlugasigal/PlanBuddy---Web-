import * as actionTypes from "../constants/actionTypes";

const initiallState = {
  user: {},
  isAuthenticated: false
};

export const kidsReducer = (state = initiallState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      newState = {
        ...newState,
        user: action.data,
        isAuthenticated: true
      };
      return newState; // eslint-disable-next-line
    case actionTypes.REGISTER_USER:
      newState = {
        ...newState,
        user: action.data
      };
      return newState;
    default:
      return newState; // eslint-disable-next-line
  }
};
