import { createSlice } from "@reduxjs/toolkit";

export const exhaustpipeSlice = createSlice ({
    name: "exhaustpipes",
    initialState: {
        exhaustpipes: [],
        isLoading: true,
        error: "",
    },
    reducers: {
        setExhaustpipes: (state, action) => {
            state.exhaustpipes = action.payload;
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

export const { setExhaustpipes, setLoading, setError } = exhaustpipeSlice.actions;
export const exhaustpipeReducers = exhaustpipeSlice.reducer;
