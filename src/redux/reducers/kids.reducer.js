import * as actionTypes from "../constants/actionTypes";

const initiallState = {
  kid: {}
};

export const kidsReducer = (state = initiallState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.NEW_KID:
      newState = {
        ...newState,
        kid: action.data
      };
      return newState;
    default:
      return newState;
  }
};
