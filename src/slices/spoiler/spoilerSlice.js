import { createSlice } from "@reduxjs/toolkit";

export const spoilerSlice = createSlice ({
    name: "spoilers",
    initialState: {
        spoilers: [],
        isLoading: true,
        error: "",
    },
    reducers: {
        setSpoilers: (state, action) => {
            state.spoilers = action.payload;
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

export const { setSpoilers, setLoading, setError } = spoilerSlice.actions;
export const spoilerReducers = spoilerSlice.reducer;
