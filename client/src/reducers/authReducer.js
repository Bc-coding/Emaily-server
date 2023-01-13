import { FETCH_USER } from "../actions/types";

export default function authReducer(state = null, action) {
  //console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; // return the user model as the user is logged in or returns false when the payload == " " evaluated as falsy

    default:
      return state;
  }
}
