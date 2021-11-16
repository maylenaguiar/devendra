import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Productos from "./components/productos/productos";
import "semantic-ui-css/semantic.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <Productos />
  </StrictMode>,
  rootElement
);
