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
  let newState = Object.assign({}, state);
  switch(action.type) {
    case actionTypes.LOGIN_USER:
      newState = {
        ...newState,
        username: action.data._username,
        password: action.data._password,
        sessionId: action.data.sessionId,
        isAuthenticated: action.data.isAuthenticated,
        name: action.data.name,
        brand: action.data.brand,
        role: action.data.role,
        error: action.data.errors
      };
      return newState;// eslint-disable-next-line
      break;

    case actionTypes.IS_AUTHENTICATED:
      newState = {
        ...newState,
        Loader: true,
        username: action.data.data.username,
        password: action.data.data.password,
        sessionId: action.data.data.sessionId,
        isAuthenticated: action.data.data.isAuthenticated,
        brand: action.data.data.brand,
        name: action.data.data.name,
        role: action.data.data.role
      };
      return newState;// eslint-disable-next-line
        break;

    case actionTypes.LOGOUT_USER:
      newState = {
        ...newState
      };
      return newState;// eslint-disable-next-line
        break;

    case actionTypes.INVITE_USER:
      newState = {
        ...newState,
        username: action.data.data.emailaddress
      };
      return newState;// eslint-disable-next-line
        break;

    case actionTypes.REGISTER:
      newState = {
        ...newState,
        username: action.username,
        password: action.password,
        sessionId: action.sessionId,
        isAuthenticated: action.isAuthenticated,
        brand: action.data.brand,
        name: action.name,
        role: action.role
      };
      return newState;// eslint-disable-next-line
        break;
    case actionTypes.TO_HOME:
      newState = {
        ...newState
      };
      return newState;// eslint-disable-next-line
        break;
    case actionTypes.TO_LOGIN:
      newState = {
        ...newState
      };
      return newState;// eslint-disable-next-line
        break;
    case actionTypes.CONTACT_US:
      newState = {
        ...newState
      };
      return newState;
    default:
      return newState;// eslint-disable-next-line
    }
};