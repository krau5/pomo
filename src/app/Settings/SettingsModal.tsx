import { ChangeEvent, useCallback, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import { PomodoroIntervals } from 'types';
import { disableDarkMode, enableDarkMode } from 'store/theme';
import { useAppDispatch, useAppSelector } from 'store';
import {
  selectIntervals,
  selectPomodorosInSession,
  setIntervals,
  setPomodorosInSession,
} from 'store/intervals';
import { disableSound, enableSound } from 'store/preferences';
import { SettingsForm } from './SettingsForm';

export const SettingsModal = () => {
  const dispatch = useAppDispatch();

  const intervals = useAppSelector(selectIntervals, shallowEqual);
  const actualPomodorosInSession = useAppSelector(selectPomodorosInSession);

  const [isOpened, setIsOpened] = useState(false);
  const [preferences, setPreferences] = useState(intervals);
  const [pomodorosInSessionCount, setPomodorosInSessionCount] = useState<
    string | number
  >(actualPomodorosInSession);

  const handleOpen = useCallback(() => {
    setIsOpened(true);
  }, []);

  const handleClose = useCallback(() => {
    dispatch(setIntervals(preferences));
    dispatch(setPomodorosInSession(Number(pomodorosInSessionCount)));
    setIsOpened(false);
  }, [dispatch, preferences, pomodorosInSessionCount]);

  const handleIntervalChange = useCallback(
    (interval: PomodoroIntervals) => (event: ChangeEvent<HTMLInputElement>) => {
      setPreferences((previousPreferences) => ({
        ...previousPreferences,
        [interval]: event.target.value,
      }));
    },
    []
  );

  const handlePomodorosInSessionChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPomodorosInSessionCount(event.target.value);
    },
    []
  );

  const handleThemeChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        dispatch(enableDarkMode());
        return;
      }

      dispatch(disableDarkMode());
    },
    [dispatch]
  );

  const handleSoundChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        dispatch(enableSound());
        return;
      }

      dispatch(disableSound());
    },
    [dispatch]
  );

  return (
    <>
      <Button
        aria-label="Open settings"
        icon="dots"
        onClick={handleOpen}
        variant="secondary"
      />

      {isOpened && (
        <Modal onClose={handleClose} title="Settings">
          <SettingsForm
            preferences={preferences}
            pomodorosInSession={pomodorosInSessionCount}
            onIntervalChange={handleIntervalChange}
            onPomodorosInSessionChange={handlePomodorosInSessionChange}
            onThemeChange={handleThemeChange}
            onSoundChange={handleSoundChange}
          />
        </Modal>
      )}
    </>
  );
};
