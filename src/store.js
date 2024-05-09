import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth/authSlice';
import { carReducers } from './slices/car/carSlices';
import { wheelReducers } from './slices/wheel/wheelSlice';
import { engineReducers } from './slices/engine/engineSlice';
import { suspensionReducers } from './slices/suspension/suspensionSlice';
import { brakeReducers } from './slices/brake/brakeSlice';
import { exhaustpipeReducers } from './slices/exhaustpipe/exhaustpipeSlice';
import { lightReducers } from './slices/light/lightSlice';
import { spoilerReducers } from './slices/spoiler/spoilerSlice';
import { sideskirtReducers } from './slices/sideskirt/sideskirtSlice';
import { proveedorReducers } from './slices/proveedor/proveedorSlice';

export const store = configureStore({
    reducer: {
      auth: authReducer,
      cars: carReducers,
      wheels: wheelReducers,
      engines: engineReducers,
      suspensions: suspensionReducers,
      brakes: brakeReducers,
      exhaustpipes: exhaustpipeReducers,
      lights: lightReducers,
      spoilers: spoilerReducers,
      sideskirts: sideskirtReducers,
      proveedor: proveedorReducers,
    },
});
