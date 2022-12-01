import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

type State = {
  theme: 'light' | 'dark';
};

const initialState: State = {
  theme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    enableDarkMode: (state) => {
      state.theme = 'dark';
    },
    disableDarkMode: (state) => {
      state.theme = 'light';
    },
  },
});

export const theme = themeSlice.reducer;

export const { enableDarkMode, disableDarkMode } = themeSlice.actions;

const selectState = (state: RootState) => state.theme;

export const selectTheme = createSelector(selectState, (state) => state.theme);
