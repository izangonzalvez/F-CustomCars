import { createSlice } from "@reduxjs/toolkit";

export const proveedorSlice = createSlice ({
    name: "proveedor",
    initialState: {
        proveedor: [],
        isLoading: true,
        error: "",
    },
    reducers: {
        setProveedor: (state, action) => {
            state.proveedor = action.payload;
            state.isLoading = false;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    }
});

export const { setProveedor, setLoading, setError } = proveedorSlice.actions;
export const proveedorReducers = proveedorSlice.reducer;