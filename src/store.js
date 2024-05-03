import { configureStore } from '@reduxjs/toolkit'

import { authReducer } from './slices/auth/authSlice'
import { carReducers } from './slices/car/carSlices'

export const store = configureStore({
    reducer: {
      auth: authReducer,
      cars: carReducers,
    },
}) 