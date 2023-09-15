import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import APIContextProvider from "./contexts";
import ThemeContextProvider from "./contexts/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <APIContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </APIContextProvider>
  </React.StrictMode>
);
