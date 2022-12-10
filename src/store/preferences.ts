import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

type State = {
  soundEnabled: boolean;
};

const initialState: State = {
  soundEnabled: true,
};

const preferencesSlice = createSlice({
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

export const preferences = preferencesSlice.reducer;

export const { enableSound, disableSound } = preferencesSlice.actions;

const selectState = (state: RootState) => state.preferences;

export const selectIsSoundEnabled = createSelector(
  [selectState],
  (state) => state.soundEnabled
);
