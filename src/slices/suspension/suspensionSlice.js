import { createSlice } from "@reduxjs/toolkit";

export const suspensionSlice = createSlice ({
    name: "suspensions",
    initialState: {
        suspensions: [],
        isLoading: true,
        error: "",
    },
    reducers: {
        setSuspensions: (state, action) => {
            state.suspensions = action.payload;
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

export const { setSuspensions, setLoading, setError } = suspensionSlice.actions;
export const suspensionReducers = suspensionSlice.reducer;
