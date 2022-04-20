require("./bootstrap");
import ReactDom from "react-dom";
import React from "react";
import App from "../components/App";
import { ContextProvider } from "../components/context/NavContext";
import { BrowserRouter } from "react-router-dom";
import { ContextContainer } from "../../resources/ContextApp/ContextContainer"

ReactDom.render(
    <React.StrictMode>
        <ContextProvider>
            <BrowserRouter>
                <ContextContainer>
                    <App />
                </ContextContainer>
            </BrowserRouter>
        </ContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
