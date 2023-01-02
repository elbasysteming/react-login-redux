import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./router";

export const App = () => {
    return (
        <BrowserRouter>
            <RoutesApp />
        </BrowserRouter>
    );
};
