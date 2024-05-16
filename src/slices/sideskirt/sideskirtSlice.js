import { createSlice } from "@reduxjs/toolkit";

export const sideskirtSlice = createSlice ({
    name: "sideskirts",
    initialState: {
        sideskirt: null,
        sideskirts: [],
        isLoading: true,
        error: "",
    },
    reducers: {
        setSideskirt: (state, action) => {
            state.sideskirt = action.payload;
            state.isLoading = false;
        },
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

export const { setSideskirt, setSideskirts, setLoading, setError } = sideskirtSlice.actions;
export const sideskirtReducers = sideskirtSlice.reducer;
