import axios from "axios";
import { FETCH_USER } from "./types";

// Refactoring
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

// action creators -- a function that defines the action
// export const fetchUser = () => {
//   // utilise the redux thunk
//   // when we wired up the redux thunk middleware (applyMiddleWare(reduxThunk))
//   // the purpose of the middleware, the thunk will inspect the returned value of the function and if the returned value is a function
//   // the thunk will call the function and pass in that dispatch function as an argumnet

//   return function (dispatch) {
//     // in this case, we will wait until the promise is resolved, then we will actually dispatch an action and it will be sent off to the reducers
//     axios.get("/api/current_user").then((res) =>
//       dispatch({
//         type: FETCH_USER,
//         payload: res,
//       })
//     );
//   };
// };
