import React from "react";
import { Link } from "react-router-dom";
import { LOGOUT } from "../../router/paths";

export const Private = () => {
    return (
        <>
            <h1>Mi ruta privada 🔒 </h1>
            <p> Si este código te ahorró tiempo, dale 1 star en github.</p>
            <p>
                <Link to={LOGOUT}>Cerrar sesión</Link>
            </p>
        </>
    );
};
