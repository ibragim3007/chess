import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CellInterface } from './interfaces/tableInterfaces';
import { RootFigure } from './interfaces/RootFigure';

interface InitialStateInterface {
  size: number;
  cells: CellInterface[];
  figures: RootFigure[];
}

const initialState: InitialStateInterface = {
  size: 8,
  cells: [],
  figures: [],
};

export const tableSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    initCell(state, action: PayloadAction<CellInterface>) {
      if (state.cells.length < 64) state.cells.push(action.payload);
    },
    initFigure(state, action: PayloadAction<RootFigure>) {
      state.figures.push(action.payload);
    },
  },
});

export const tableAction = tableSlice.actions;
export const tableReducer = tableSlice.reducer;
