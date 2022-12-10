import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { intervals } from './intervals';
import { preferences } from './preferences';
import { theme } from './theme';

const reducer = combineReducers({ intervals, preferences, theme });

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type RootDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<RootDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
