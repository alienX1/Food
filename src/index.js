import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import Nutri from "./components/nutri/nutri.js";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,

  rootElement
);
