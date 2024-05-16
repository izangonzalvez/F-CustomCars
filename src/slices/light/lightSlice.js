import { createSlice } from "@reduxjs/toolkit";

export const lightSlice = createSlice ({
    name: "lights",
    initialState: {
        light: null,
        lights: [],
        isLoading: true,
        error: "",
    },
    reducers: {
        setLight: (state, action) => {
            state.light = action.payload;
            state.isLoading = false;
        },
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

export const { setLight, setLights, setLoading, setError } = lightSlice.actions;
export const lightReducers = lightSlice.reducer;
