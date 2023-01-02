import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchWrapper } from "../../helpers/api";

const baseUrl = `${process.env.REACT_APP_API_URL}/users`;

const initialState = {
    users: {},
};

export const getAll = createAsyncThunk(
    "auth/users",
    async () => await fetchWrapper.get(`${baseUrl}`)
);

export const usersSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(getAll.pending, state => {
                state.users = { loading: true };
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.users = { error: action.error };
            });
    },
});

export default usersSlice.reducer;
