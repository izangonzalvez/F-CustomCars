import { createSlice } from "@reduxjs/toolkit";

export const sideskirtSlice = createSlice ({
    name: "sideskirts",
    initialState: {
        sideskirts: [],
        isLoading: true,
        error: "",
    },
    reducers: {
        setSideskirts: (state, action) => {
            state.sideskirts = action.payload;
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

export const { setSideskirts, setLoading, setError } = sideskirtSlice.actions;
export const sideskirtReducers = sideskirtSlice.reducer;
