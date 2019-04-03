import React from "react";
import "./index.css";
import "semantic-ui-css/semantic.min.css";

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// import React from "react";
import { render } from "react-dom";
import Login from "./components/Login/Login.js";

render(
  <React.Fragment>
    <Login />
  </React.Fragment>,
  document.getElementById("root")
);
