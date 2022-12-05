import { ChangeEvent, useCallback, useState } from 'react';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import { PomodoroIntervals } from 'types';
import { disableDarkMode, enableDarkMode } from 'store/theme';
import { useAppDispatch, useAppSelector } from 'store';
import { selectIntervals, setIntervals } from 'store/intervals';
import { SettingsForm } from './SettingsForm';

export const SettingsModal = () => {
  const dispatch = useAppDispatch();

  const intervals = useAppSelector(selectIntervals);

  const [isOpened, setIsOpened] = useState(false);
  const [preferences, setPreferences] = useState(intervals);

  const handleOpen = useCallback(() => {
    setIsOpened(true);
  }, []);

  const handleClose = useCallback(() => {
    dispatch(setIntervals(preferences));
    setIsOpened(false);
  }, [dispatch, preferences]);

  const handleIntervalChange = useCallback(
    (interval: PomodoroIntervals) => (event: ChangeEvent<HTMLInputElement>) => {
      setPreferences((previousPreferences) => ({
        ...previousPreferences,
        [interval]: event.target.value,
      }));
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

  return (
    <>
      <Button icon="dots" onClick={handleOpen} variant="secondary" />

      {isOpened && (
        <Modal onClose={handleClose} title="Settings">
          <SettingsForm
            value={preferences}
            onIntervalChange={handleIntervalChange}
            onThemeChange={handleThemeChange}
          />
        </Modal>
      )}
    </>
  );
};
