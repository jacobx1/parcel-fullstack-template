import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { Grommet, dark } from "grommet";

ReactDOM.render(
  <Grommet full theme={dark}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Grommet>,
  document.querySelector("#app")
);
