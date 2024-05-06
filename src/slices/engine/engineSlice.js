// engineSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const engineSlice = createSlice ({
    name: "engines",
    initialState: {
        engines: [],
        isLoading: true,
        error: "",
    },
    reducers: {
        setEngines: (state, action) => {
            state.engines = action.payload;
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

export const { setEngines, setLoading, setError } = engineSlice.actions;
export const engineReducers = engineSlice.reducer;
