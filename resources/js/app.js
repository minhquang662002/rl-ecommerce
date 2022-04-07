require("./bootstrap");
import ReactDom from "react-dom";
import React from "react";
import App from "../components/App";
import { ContextProvider } from "../components/context/NavContext";
import { BrowserRouter } from "react-router-dom";
ReactDom.render(
    <React.StrictMode>
        <ContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
