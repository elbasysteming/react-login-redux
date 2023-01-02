import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PRIVATE } from "../../router/paths";
import { useSelector } from "react-redux";

export const PublicRoute = () => {
    const authUser = useSelector(state => state.auth.user);
    if (authUser) {
        return <Navigate to={PRIVATE} />;
    }

    return (
        <div>
            <Outlet />
        </div>
    );
};
