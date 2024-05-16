import { createSlice } from "@reduxjs/toolkit";

export const suspensionSlice = createSlice ({
    name: "suspensions",
    initialState: {
        suspension: null,
        suspensions: [],
        isLoading: true,
        error: "",
    },
    reducers: {
        setSuspension: (state, action) => {
            state.suspension = action.payload;
            state.isLoading = false;
        },
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

export const { setSuspension, setSuspensions, setLoading, setError } = suspensionSlice.actions;
export const suspensionReducers = suspensionSlice.reducer;
