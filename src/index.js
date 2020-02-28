import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './redux/store';

import "assets/scss/material-kit-react.scss?v=1.8.0";

import App from './App';

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>
 ,
  document.getElementById("root")
);
