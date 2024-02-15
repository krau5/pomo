import {
  createAction,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { PomodoroIntervals } from 'types';
import { RootState } from '.';

export type Intervals = Record<PomodoroIntervals, number>;

type State = {
  currentInterval: PomodoroIntervals;
  intervals: Intervals;
  pomodoroCount: number;
  pomodorosInSession: number;
};

const initialState: State = {
  currentInterval: 'pomodoro',
  intervals: {
    pomodoro: 50,
    shortBreak: 10,
    longBreak: 30,
  },
  pomodoroCount: 0,
  pomodorosInSession: 4,
};

export const incrementPomodoroCount = createAction('pomodoroCount/increment');

export const resetPomodoroCount = createAction('pomodoroCount/reset');

export const setPomodorosInSession = createAction<number>(
  'pomodorosInSession/set',
);

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

    builder.addCase(
      setPomodorosInSession,
      (state, action: PayloadAction<number>) => {
        state.pomodorosInSession = action.payload;
      },
    );
  },
});

export const intervals = intervalsSlice.reducer;

export const { setCurrentInterval, setIntervals } = intervalsSlice.actions;

const selectState = (state: RootState) => state.intervals;

export const selectCurrentInterval = createSelector(
  selectState,
  (state): PomodoroIntervals => state.currentInterval,
);

export const selectIntervals = createSelector(
  selectState,
  (state): Intervals => state.intervals,
);

export const selectPomodoroCount = createSelector(
  selectState,
  (state): number => state.pomodoroCount,
);

export const selectPomodorosInSession = createSelector(
  selectState,
  (state): number => state.pomodorosInSession,
);
