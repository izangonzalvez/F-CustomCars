import { createSlice } from "@reduxjs/toolkit";

export const wheelSlice = createSlice ({
    name: "wheels",
    initialState: {
        wheels: [],
        isLoading: true,
        error: "",
    },
    reducers: {
        setWheels: (state, action) => {
            state.wheels = action.payload;
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

export const { setWheels, setLoading, setError } = wheelSlice.actions;
export const wheelReducers = wheelSlice.reducer;
