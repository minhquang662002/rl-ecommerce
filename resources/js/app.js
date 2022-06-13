require("./bootstrap");
import ReactDom from "react-dom";
import React from "react";
import App from "../components/App";
import { ContextProvider } from "../components/context/NavContext";
import { BrowserRouter } from "react-router-dom";
import { ContextContainer } from "../../resources/ContextApp/ContextContainer"
import { HelmetProvider } from 'react-helmet-async'
import { QueryClientProvider, QueryClient } from "react-query"
import './i18n';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    
  } from "@apollo/client"

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache()
})
const queryClient= new QueryClient()
ReactDom.render(
    <React.StrictMode>
        <ContextProvider>
            <BrowserRouter>
                <ApolloProvider client={client}>
                    <QueryClientProvider client={queryClient}>
                        <ContextContainer>
                            <HelmetProvider>
                                <App /> 
                            </HelmetProvider>
                        </ContextContainer>
                    </QueryClientProvider>
                </ApolloProvider>
            </BrowserRouter>
        </ContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
