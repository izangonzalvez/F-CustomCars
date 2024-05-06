import { createSlice } from "@reduxjs/toolkit";

export const lightSlice = createSlice ({
    name: "lights",
    initialState: {
        lights: [],
        isLoading: true,
        error: "",
    },
    reducers: {
        setLights: (state, action) => {
            state.lights = action.payload;
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

export const { setLights, setLoading, setError } = lightSlice.actions;
export const lightReducers = lightSlice.reducer;
