import { createSelector, createSlice } from '@reduxjs/toolkit';
import { AppTheme } from 'types';
import { RootState } from '.';

type State = {
  soundEnabled: boolean;
  theme: AppTheme;
};

const initialState: State = {
  soundEnabled: true,
  theme: 'light',
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
    enableDarkMode: (state) => {
      state.theme = 'dark';
    },
    disableDarkMode: (state) => {
      state.theme = 'light';
    },
  },
});

export const settings = settingsSlice.reducer;

export const { enableSound, disableSound, enableDarkMode, disableDarkMode } =
  settingsSlice.actions;

const selectState = (state: RootState) => state.settings;

export const selectIsSoundEnabled = createSelector(
  [selectState],
  (state) => state.soundEnabled,
);

export const selectTheme = createSelector(selectState, (state) => state.theme);
