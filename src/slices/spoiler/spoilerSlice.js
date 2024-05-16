import { createSlice } from "@reduxjs/toolkit";

export const spoilerSlice = createSlice ({
    name: "spoilers",
    initialState: {
        spoiler: null,
        spoilers: [],
        isLoading: true,
        error: "",
    },
    reducers: {
        setSpoiler: (state, action) => {
            state.spoiler = action.payload;
            state.isLoading = false;
        },
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

export const { setSpoiler, setSpoilers, setLoading, setError } = spoilerSlice.actions;
export const spoilerReducers = spoilerSlice.reducer;
