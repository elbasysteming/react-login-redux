import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGIN, PRIVATE } from "../../router/paths";

export const Home = () => {
    const authUser = useSelector(state => state.auth.user);

    return (
        <div>
            <h1>💛 Estamos en el Home </h1>
            <p> Si este código te ahorró tiempo, dale 1 star en github.</p>
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
