require("./bootstrap");
import ReactDom from "react-dom";
import React from "react";
import App from "../components/App";
import { ContextProvider } from "../components/context/NavContext";
ReactDom.render(
    <React.StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
