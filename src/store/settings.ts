import { createSelector, createSlice } from '@reduxjs/toolkit';
import { AppTheme } from 'types';
import { RootState } from '.';

type State = {
  soundEnabled: boolean;
  appTheme: AppTheme;
};

const initialState: State = {
  soundEnabled: true,
  appTheme: 'light',
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
      state.appTheme = 'dark';
    },
    disableDarkMode: (state) => {
      state.appTheme = 'light';
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

export const selectAppTheme = createSelector(
  selectState,
  (state) => state.appTheme,
);
