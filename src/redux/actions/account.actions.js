import * as actionTypes from "../constants/actionTypes";

const initiallState = {
  username: '',
  password: '',
  isAuthenticated: false,
  name: '',
  sessionId: '',
  role: '',
  brand: '',
  errors: ''
};

export const accountReducer = (state = initiallState, action) => {
}