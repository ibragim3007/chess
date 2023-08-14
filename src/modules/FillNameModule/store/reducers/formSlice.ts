import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormInterface } from '../interface/FormInterface';

interface InitialStateInterface {
  formData: FormInterface;
}

const initialState: InitialStateInterface = {
  formData: {
    name: '',
  },
};

export const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    changeForm(state, action: PayloadAction<FormInterface>) {
      state.formData = action.payload;
    },
  },
});

export const formSliceAction = formSlice.actions;
export const formSliceReducer = formSlice.reducer;
