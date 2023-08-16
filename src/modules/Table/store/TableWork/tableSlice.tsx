import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CellInterface, PositionInterface } from './interfaces/tableInterfaces';
import { RootFigure } from './interfaces/RootFigure';

interface InitialStateInterface {
  size: number;

  cells: CellInterface[];
  figures: RootFigure[];
  availableMoves: PositionInterface[];
}

const initialState: InitialStateInterface = {
  size: 8,
  cells: [],
  figures: [],
  availableMoves: [],
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
    activeFigure(state, action: PayloadAction<RootFigure>) {
      state.figures.map(figure => {
        figure.disActive();

        if (figure.id === action.payload.id) {
          console.log(figure);
          figure.makeActive();
        }

        return figure;
      });
    },
    setAvailableMoves(state, action: PayloadAction<PositionInterface[]>) {
      state.availableMoves = action.payload;

      state.cells.map(cell => {
        cell.isAvailableForMove = false;
        if (
          action.payload.find(
            available => available.letter === cell.position.letter && available.number === cell.position.number,
          )
        ) {
          cell.isAvailableForMove = true;
        }
        return cell;
      });
    },
  },
});

export const tableAction = tableSlice.actions;
export const tableReducer = tableSlice.reducer;
