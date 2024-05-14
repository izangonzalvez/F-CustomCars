import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice ({
    name: "cars",
    initialState: {
        car: null,
        cars: [],
        image: "",
        isLoading: true,
        authToken: "",
        error: "",
        totalPrice: 0
    },
    reducers: {
        setLoading: (state, action) =>{
            state.isLoading = action.payload;
        },
        setCar: (state, action) => {
            state.car = action.payload
            state.totalPrice += state.car.wheel.price;
            state.totalPrice += state.car.engine.price;
            state.totalPrice += state.car.suspension.price;
            state.totalPrice += state.car.brake.price;
            state.totalPrice += state.car.exhaustpipe.price;
            state.totalPrice += state.car.light.price;
            state.totalPrice += state.car.spoiler.price;
            state.totalPrice += state.car.sideskirt.price;
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
