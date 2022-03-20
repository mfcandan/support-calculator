import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider as BumbagProvider } from "bumbag";

ReactDOM.render(
  <React.StrictMode>
    <BumbagProvider>
      <App />
    </BumbagProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
