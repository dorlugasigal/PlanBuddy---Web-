import axios from "axios";
import * as actionTypes from "../constants/actionTypes";
import { Constants } from "../../Constants";

axios.defaults.baseURL = Constants.URLS.API_PATH;
//region function export
export default {
  addKid: addKid
};

//endregion

//region actions
function newKid(user) {
  return {
    type: actionTypes.NEW_KID,
    data: user
  };
}

//endregion

//region thunk actions
function addKid(user) {
  return dispatch => {
    if (user) {
      axios.post("http://apiurl", { user: user }).then(user => {
        dispatch(newKid(user));
      });
    }
  };
}
//endregion
