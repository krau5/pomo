import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import {
  enableSound,
  disableSound,
  disableDarkMode,
  enableDarkMode,
  selectIsSoundEnabled,
  selectTheme,
} from 'store/settings';
import {
  Intervals,
  setIntervals,
  setPomodorosInSession,
} from 'store/intervals';

type Props = {
  enable: boolean;
};

export const useSettings = () => {
  const dispatch = useAppDispatch();

  const isSoundEnabled = useAppSelector(selectIsSoundEnabled);
  const theme = useAppSelector(selectTheme);

  const toggleSound = useCallback(
    ({ enable }: Props) => {
      if (enable) {
        dispatch(enableSound());
        return;
      }

      dispatch(disableSound());
    },
    [dispatch],
  );

  const toggleDarkMode = useCallback(
    ({ enable }: Props) => {
      if (enable) {
        dispatch(enableDarkMode());
        return;
      }

      dispatch(disableDarkMode());
    },
    [dispatch],
  );

  const updatePomodorosInSessionCount = useCallback(
    (count: string | number) => {
      dispatch(setPomodorosInSession(Number(count)));
    },
    [dispatch],
  );

  const updateIntervals = useCallback(
    (intervals: Intervals) => {
      dispatch(setIntervals(intervals));
    },
    [dispatch],
  );

  return {
    isSoundEnabled,
    toggleSound,
    theme,
    toggleDarkMode,
    updatePomodorosInSessionCount,
    updateIntervals,
  };
};
