import React from "react";
import "./index.css";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import * as serviceWorker from "./serviceWorker";
import { render } from "react-dom";
import { createBrowserHistory as createHistory } from "history";
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { accountReducer } from "./redux/reducers/account.reducer";
import Login from "./components/Login/Login.js";

const history = createHistory();

let middleware = [createLogger()];

middleware = [...middleware, thunk, routerMiddleware(history)];

const reducers = {
  account: accountReducer,
  router: routerReducer
};

const store = createStore(
  combineReducers(reducers),
  {},
  applyMiddleware(...middleware)
);

render(
  <Router store={store}>
    <Route path="/" component={App} />
    <Route path="/login" component={Login} />
  </Router>,
  document.getElementById("root")
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// import React from "react";
serviceWorker.unregister();
