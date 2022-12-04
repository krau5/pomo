import { PomodoroIntervals } from 'types';
import {
  createAction,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '.';

type Intervals = Record<PomodoroIntervals, number>;

type State = {
  currentInterval: PomodoroIntervals;
  intervals: Intervals;
  pomodoroCount: number;
};

const initialState: State = {
  currentInterval: 'pomodoro',
  intervals: {
    pomodoro: 50,
    shortBreak: 10,
    longBreak: 30,
  },
  pomodoroCount: 0,
};

export const incrementPomodoroCount = createAction('pomoCount/increment');

export const resetPomodoroCount = createAction('pomoCount/reset');

const intervalsSlice = createSlice({
  name: 'intervals',
  initialState,
  reducers: {
    setCurrentInterval: (state, action: PayloadAction<PomodoroIntervals>) => {
      state.currentInterval = action.payload;
    },
    setIntervals: (state, action: PayloadAction<Intervals>) => {
      state.intervals = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementPomodoroCount, (state) => {
      state.pomodoroCount += 1;
    });

    builder.addCase(resetPomodoroCount, (state) => {
      state.pomodoroCount = 0;
    });
  },
});

export const intervals = intervalsSlice.reducer;

export const { setCurrentInterval, setIntervals } = intervalsSlice.actions;

const selectState = (state: RootState) => state.intervals;

export const selectCurrentInterval = createSelector(
  selectState,
  (state): PomodoroIntervals => state.currentInterval
);

export const selectIntervals = createSelector(
  selectState,
  (state): Intervals => state.intervals
);

export const selectPomodoroCount = createSelector(
  selectState,
  (state): number => state.pomodoroCount
);
