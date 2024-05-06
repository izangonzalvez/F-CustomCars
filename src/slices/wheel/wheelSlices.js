import { createSlice } from "@reduxjs/toolkit";
import { setLoading } from "../car/carSlices";

export const wheelSlice = createSlice ({
    name: "wheel",
    initialState: {
        wheel: null,
        wheels: [],
        image: "",
        isLoading: true,
        authToken: "",
        error: "",
    },

    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setWheel: (state, action) => {
            state.wheel = action.payload
            state.isLoading = false
        }
    },
});