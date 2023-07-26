import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ModalProvider } from "./context/contextModais.jsx";
import { ListProvider } from "./context/contextList.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <ListProvider>
          <App />
        </ListProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
