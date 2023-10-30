import React from "react";
import ReactDOM from "react-dom/client";
import "./lib/index.css";
import App from "./App";
import Form from "./lib/components/Form";

export { Form };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
