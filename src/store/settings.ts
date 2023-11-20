import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

type State = {
  soundEnabled: boolean;
};

const initialState: State = {
  soundEnabled: true,
};

const settingsSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    enableSound: (state) => {
      state.soundEnabled = true;
    },
    disableSound: (state) => {
      state.soundEnabled = false;
    },
  },
});

export const settings = settingsSlice.reducer;

export const { enableSound, disableSound } = settingsSlice.actions;

const selectState = (state: RootState) => state.preferences;

export const selectIsSoundEnabled = createSelector(
  [selectState],
  (state) => state.soundEnabled
);
