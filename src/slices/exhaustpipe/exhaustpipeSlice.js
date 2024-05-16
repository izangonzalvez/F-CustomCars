import { createSlice } from "@reduxjs/toolkit";

export const exhaustpipeSlice = createSlice ({
    name: "exhaustpipes",
    initialState: {
        exhaustpipe: null,
        exhaustpipes: [],
        isLoading: true,
        error: "",
    },
    reducers: {
        setExhaustpipe: (state, action) => {
            state.exhaustpipe = action.payload;
            state.isLoading = false;
        },
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

export const { setExhaustpipe, setExhaustpipes, setLoading, setError } = exhaustpipeSlice.actions;
export const exhaustpipeReducers = exhaustpipeSlice.reducer;
