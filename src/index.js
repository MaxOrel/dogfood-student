import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/app";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
