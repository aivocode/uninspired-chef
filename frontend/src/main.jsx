import ReactDOM from "react-dom/client";
import React from "react";

import App from "./App.jsx";
import './global.css';
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";

// Get the "root" div from index.html.
// The React application will be inserted into this div.
const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
