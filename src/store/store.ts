import { tableReducer } from './../modules/Table/store/TableWork/tableSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { formSliceReducer } from '../modules/FillNameModule/store/reducers/formSlice';

const rootReducer = combineReducers({
  formSliceReducer,
  tableReducer,
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
