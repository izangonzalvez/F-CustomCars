import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authToken: "",
        usuari: "",
        roles: []
    },
    reducers : {
        setAuthToken: (state, action) => {
            state.authToken = action.payload
        },
        setUser: (state, action) => {
            state.usuari = action.payload
        },
        setRoles: (state, action) => {
            state.roles = action.payload
        }
    },
})

export const { setAuthToken, setUser, setRoles } = authSlice.actions
export const authReducer = authSlice.reducer