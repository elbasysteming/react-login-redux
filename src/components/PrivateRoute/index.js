import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "../../router/paths";
import { useSelector } from "react-redux";

export const PrivateRoute = () => {
    const authUser = useSelector(state => state.auth.user);

    if (!authUser) {
        return <Navigate to={LOGIN} />;
    }

    return (
        <div>
            <Outlet />
        </div>
    );
};
