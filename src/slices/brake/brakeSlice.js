import { createSlice } from "@reduxjs/toolkit";

export const brakeSlice = createSlice ({
    name: "brakes",
    initialState: {
        brake: null,
        brakes: [],
        isLoading: true,
        error: "",
    },
    reducers: {
        setBrake: (state, action) => {
            state.brake = action.payload;
            state.isLoading = false;
        },
        setBrakes: (state, action) => {
            state.brakes = action.payload;
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

export const { setBrake, setBrakes, setLoading, setError } = brakeSlice.actions;
export const brakeReducers = brakeSlice.reducer;
