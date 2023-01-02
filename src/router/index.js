import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { PrivateRoute } from "../components/PrivateRoute";
import { PublicRoute } from "../components/PublicRoute";
import { Private } from "../pages/Private";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { NoMatch } from "../pages/NoMatch";
import { LOGIN, LOGOUT, PRIVATE } from "../router/paths";
import { history } from "../helpers/history";

export const RoutesApp = () => {
    history.navigate = useNavigate();
    history.location = useLocation();

    return (
        <Routes>
            <Route path={PRIVATE} element={<PrivateRoute />}>
                <Route index element={<Private />} />
                <Route path={LOGOUT} element={<Logout />} />
            </Route>
            <Route path="/" element={<PublicRoute />}>
                <Route index element={<Home />} />
                <Route path={LOGIN} element={<Login />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
};
