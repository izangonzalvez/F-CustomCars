import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: "",
        roles: [] 
    },
    reducers : {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setRoles: (state, action) => {
            state.roles = action.payload
        }
    },
})

export const { setUser, setRoles } = authSlice.actions
export const authReducer = authSlice.reducer