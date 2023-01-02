import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGIN, PRIVATE } from "../../router/paths";

export const NoMatch = () => {
    const authUser = useSelector(state => state.auth.user);

    return (
        <div>
            <h1> 💔 Página no encontrada </h1>
            <p>
                {authUser ? (
                    <Link to={PRIVATE}>Sección privada</Link>
                ) : (
                    <Link to={LOGIN}>Iniciar sesión</Link>
                )}
            </p>
        </div>
    );
};
