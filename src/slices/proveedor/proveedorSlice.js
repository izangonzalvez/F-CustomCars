import { createSlice } from '@reduxjs/toolkit'

const proveedorSlice = createSlice({
    name: 'proveedors',
    initialState: {
        authToken: "",
        usuari: [],
        roles: [],
        userId: "",
        roleId: "",
        user: "",
        error: "",
        isLoading: true,
    },
    reducers: {
        setAuthToken: (state, action) => {
            state.authToken = action.payload;
        },
        setUser: (state, action) => {
            state.usuari = action.payload;
            state.isLoading = false;
        },
        setRoles: (state, action) => {
            state.roles = action.payload;
        },
        resetAuthState: (state, action) => {
            state.authToken = "";
            // state.usuari = "";
            // state.roles = [];
            state.roleId = "";
            state.userId = "";
            state.user = "";
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
})

export const { setAuthToken, setUser, setRoles, resetAuthState, setError } = proveedorSlice.actions
export const proveedorsReducers = proveedorSlice.reducer




