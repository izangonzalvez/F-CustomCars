import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authToken: "",
        usuari: "",
        roles: [],
        userId: "",
        roleId: "",
        user: ""
    },
    reducers: {
        setAuthToken: (state, action) => {
            state.authToken = action.payload;
        },
        setUser: (state, action) => {
            state.usuari = action.payload;
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
        }
    },
})

export const { setAuthToken, setUser, setRoles, resetAuthState } = authSlice.actions
export const authReducer = authSlice.reducer
