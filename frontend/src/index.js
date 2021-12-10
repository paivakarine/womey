import React from "react";
import ReactDOM from "react-dom";
import Routers from "./routers.js";
import { Provider } from "react-redux";
import store from "./store";

document.title = 'Womey'

ReactDOM.render(
  <Provider store={store}>
    <Routers />
      
  </Provider>,
  document.getElementById("root")
);
