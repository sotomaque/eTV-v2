import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

import App from './App';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <App />
  </Router>,
  document.getElementById("root")
);
