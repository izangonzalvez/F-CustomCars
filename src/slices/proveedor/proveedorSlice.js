import { createSlice } from "@reduxjs/toolkit";

export const proveedorSlice = createSlice({
    name: "proveedor",
    initialState: {
        proveedor: [],
        authToken: "",
        isLoading: true,
        roles: [],
        error: "",
    },
    reducers: {
        setProveedor: (state, action) => {
            state.proveedor = action.payload;
            state.isLoading = false;
        },
        setAuthToken: (state, action) => {
            state.authToken = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setRoles: (state, action) => {
            state.roles = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setProveedor, setAuthToken, setLoading, setRoles, setError } = proveedorSlice.actions;
export const proveedorReducers = proveedorSlice.reducer;