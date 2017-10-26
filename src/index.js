import React from "react";
import ReactDOM from "react-dom";
// import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from "styled-components";
import { Provider } from "react-redux";
import App from "./components";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
// registerServiceWorker();

injectGlobal`
    body {
        font-family: Courier, sans-serif;
    }
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
`;
