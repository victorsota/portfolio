import React from "react";
import { createRoot } from "react-dom";
import "./styles/style.css";
import App from "./App";
import "./output.css";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  throw new Error("Root element not found");
}
