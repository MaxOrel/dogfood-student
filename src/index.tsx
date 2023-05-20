import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { App } from "./components/app";
import "./styles.css";
import { Provider } from 'react-redux';
import store, { persistor } from './storage/store';
import { PersistGate } from 'redux-persist/integration/react';

const rootElement = document.getElementById("root") as HTMLDivElement;
const root = createRoot(rootElement);

const Router = process.env.REACT_APP_GH_PAGES === 'true' ? HashRouter : BrowserRouter;

root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Router>
                <App />
            </Router>
        </PersistGate>
    </Provider>
);
