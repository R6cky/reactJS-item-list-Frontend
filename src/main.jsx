import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ModalProvider } from "./context/contextModais.jsx";
import { ListProvider } from "./context/contextList.jsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./globalStyles.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <ListProvider>
          <GlobalStyle />
          <App />
        </ListProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
