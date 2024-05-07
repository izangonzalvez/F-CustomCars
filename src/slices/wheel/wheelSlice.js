import { createSlice } from "@reduxjs/toolkit";

export const wheelSlice = createSlice ({
    name: "wheels",
    initialState: {
        wheel: null,
        wheels: [],
        isLoading: true,
        error: "",
    },
    reducers: {
        setWheel:(state, action) => {
            state.wheel = action.payload;
            state.isLoading = false
        },
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

export const { setWheel, setWheels, setLoading, setError } = wheelSlice.actions;
export const wheelReducers = wheelSlice.reducer;
