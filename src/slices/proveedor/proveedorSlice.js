import { createSlice } from "@reduxjs/toolkit";

export const proveedorSlice = createSlice({
    name: "proveedor",
    initialState: {
        authToken: "",
        proveedor: "",
        // proveedors: [],
        roles: [],
        roleID: "",
        error: "",
    },
    reducers: {
        setAuthToken: (state, action) => {
            state.authToken = action.payload;
        },
        setProveedor: (state, action) => {
            state.proveedor = action.payload;
        },

        setRoles: (state, action) => {
            state.roles = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        resetAuthState: (state, payload) => {
            state.authToken = "";
            state.roleID = "";
        }
    },
});

export const { setProveedor, setAuthToken,  setRoles, setError, resetAuthState } = proveedorSlice.actions;
export const proveedorReducers = proveedorSlice.reducer;