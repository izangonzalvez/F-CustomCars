import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice ({
    name: "cars",
    initialState: {
        car: [],
        cars: [],
        image: "",
        isLoading: true,
        authToken: "",
        error: "",
    },
    reducers: {
        setLoading: (state, action) =>{
            state.isLoading = action.payload;
        },
        setCar: (state, action) => {
            state.car = action.payload
            state.isLoading = false
        },
        setCars: (state, action) => {
            state.cars = action.payload
            state.isLoading = false
        },
        setIgame: (state, action) => {
            state.image = action.payload
        },
        setAuthToken: (state, action) => {
            state.authToken = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
});

export const { setLoading, setCar, setCars, setIgame, setAuthToken, setError } = carSlice.actions
export const carReducers = carSlice.reducer