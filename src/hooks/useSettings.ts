import { useCallback } from 'react';
import { useAppDispatch } from 'store';
import { enableSound, disableSound } from 'store/settings';
import { disableDarkMode, enableDarkMode } from 'store/theme';
import { setPomodorosInSession } from 'store/intervals';

type Props = {
  enable: boolean;
};

export const useSettings = () => {
  const dispatch = useAppDispatch();

  const toggleSound = useCallback(
    ({ enable }: Props) => {
      if (enable) {
        dispatch(enableSound());
        return;
      }

      dispatch(disableSound());
    },
    [dispatch]
  );

  const toggleDarkMode = useCallback(
    ({ enable }: Props) => {
      if (enable) {
        dispatch(enableDarkMode());
        return;
      }

      dispatch(disableDarkMode());
    },
    [dispatch]
  );

  const setPomodorosInSessionCount = useCallback(
    (count: string | number) => {
      dispatch(setPomodorosInSession(Number(count)));
    },
    [dispatch]
  );

  return { toggleSound, toggleDarkMode, setPomodorosInSessionCount };
};
