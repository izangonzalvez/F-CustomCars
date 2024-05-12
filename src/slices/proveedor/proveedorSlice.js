import { createSlice } from "@reduxjs/toolkit";

export const proveedorSlice = createSlice({
    name: "proveedor",
    initialState: {
        proveedor: null,
        proveedors: [],
        authToken: "",
        loggedInProveedorId: "",
        isLoading: true,
        roles: [],
        error: "",
    },
    reducers: {
        setProveedor: (state, action) => {
            state.proveedor = action.payload;
            state.isLoading = false;
        },
        setProveedors: (state, action) => {
            state.proveedors = action.payload;
            state.isLoading = false;
        },
        setAuthToken: (state, action) => {
            state.authToken = action.payload;
        },
        setLoggedInProveedorId: (state, action) => { 
            state.loggedInProveedorId = action.payload;
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

export const { setProveedor, setProveedors, setAuthToken, setLoggedInProveedorId, setLoading, setRoles, setError } = proveedorSlice.actions;
export const proveedorReducers = proveedorSlice.reducer;