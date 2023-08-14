import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { formSliceReducer } from '../modules/FillNameModule/store/reducers/formSlice';

const rootReducer = combineReducers({
  formSliceReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
