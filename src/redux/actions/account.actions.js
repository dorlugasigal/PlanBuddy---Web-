import axios from "axios";
import * as actionTypes from "../constants/actionTypes";
import { Constants } from "../../Constants";
import { push } from "react-router-redux";

axios.defaults.baseURL = Constants.URLS.API_PATH;
//region function export
export default {
  authenticate: authenticate,
  registerUser: registerUser
};

//endregion

//region actions
function loginUser(user) {
  return {
    type: actionTypes.LOGIN_USER,
    data: user
  };
}

function register(user) {
  return {
    type: actionTypes.REGISTER_USER,
    data: user
  };
}
//endregion

//region thunk actions
function authenticate(user) {
  return dispatch => {
    if (user) {
      axios.post("http://apiurl", { user: user }).then(user => {
        dispatch(loginUser(user));
      });
    }
  };
}

function registerUser(user) {
  console.log(user);
  return dispatch => {
    if (user) {
      axios.post("http://apiurl", { user: user }).then(user => {
        dispatch(register(user));
      });
    }
  };
}
//endregion
