import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./context/appContext";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </StrictMode>
);