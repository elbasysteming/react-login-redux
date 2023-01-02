import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { history } from "../../helpers/history";
import { fetchWrapper } from "../../helpers/api";

const baseUrl = `${process.env.REACT_APP_API_URL}/users`;

const initialState = {
    user: localStorage.getItem("user")
        ? JSON.parse(window.localStorage.getItem("user"))
        : null,
    status: null,
    error: null,
};

export const login = createAsyncThunk(
    "auth/login",
    async ({ username, password }) => {
        const data = await fetchWrapper.post(`${baseUrl}/authenticate`, {
            username,
            password,
        });
        return data;
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: state => {
            state.user = null;
            localStorage.removeItem("user");
            history.navigate("/login");
        },
    },

    extraReducers: builder => {
        builder
            .addCase(login.pending, state => {
                state.status = "pending";
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = "fulfilled";
                const user = action.payload;

                /* almacenando los detalles del usuario y el token jwt en el local store 
                para mantener al usuario conectado aún cuando se refresque la página */

                localStorage.setItem("user", JSON.stringify(user));
                state.user = user;

                /* obtener la URL de retorno desde el estado de la ubicación o por defecto a la página de inicio */
                const { from } = history.location || {
                    from: { pathname: "/" },
                };

                history.navigate(from);
            })
            .addCase(login.rejected, (state, action) => {
                state.status = "rejected";
                console.log("err");
                state.error = action.error;
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
