import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "./index.scss";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

import axios from "axios";
window.axios = axios;

const httpLink = createHttpLink({
  uri: "http://localhost:4000/",
});

const authLink = setContext((body, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

const client = new ApolloClient({
  // uri: "http://localhost:4000/",
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// action creators -- initiates changes in redux, they are used to modify the state in redux store
// any action creator expects an immediately returned action. (an action -- a js object with type property and optionally a payload)

// the purpose of redux thunk -- for handling actions that might not be synchronous, for example, using axios to send a GET request. Redux Thunk allows us to dispatch those actions asynchronously and resolve each promise that gets returned.
// so redux thunk gives us the direct access to dispatch function, we can manually pass the action to the dispatch function

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
console.log("store.getState(): ", store.getState());

// Subscribe is an event listener, it fires whenever the store gets updated
store.subscribe(() => console.log("store: ", store.getState()));

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.querySelector("#root")
);
