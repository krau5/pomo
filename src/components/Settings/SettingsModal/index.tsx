import { shallowEqual } from 'react-redux';
import { ChangeEvent, useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import {
  selectIntervals,
  selectPomodorosInSession,
  setIntervals,
} from 'store/intervals';
import { useSettings } from 'hooks';
import { PomodoroIntervals } from 'types';
import { Modal } from 'ui/Modal';
import { SettingsForm } from './SettingsForm';

type Props = {
  isOpened?: boolean;
  onClose?: () => void;
};

export const SettingsModal = ({ isOpened, onClose }: Props) => {
  const dispatch = useAppDispatch();

  const intervals = useAppSelector(selectIntervals, shallowEqual);
  const actualPomodorosInSession = useAppSelector(selectPomodorosInSession);

  const { toggleSound, toggleDarkMode } = useSettings();

  const [preferences, setPreferences] = useState(intervals);
  const [pomodorosInSessionCount, setPomodorosInSessionCount] = useState<
    string | number
  >(actualPomodorosInSession);

  const handleClose = useCallback(() => {
    dispatch(setIntervals(preferences));
    setPomodorosInSessionCount(pomodorosInSessionCount);

    if (onClose) {
      onClose();
    }
  }, [dispatch, preferences, pomodorosInSessionCount, onClose]);

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
      toggleDarkMode({ enable: event.target.checked });
    },
    [toggleDarkMode]
  );

  const handleSoundChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      toggleSound({ enable: event.target.checked });
    },
    [toggleSound]
  );

  return (
    <Modal isOpened={isOpened} onClose={handleClose} title="Settings">
      <SettingsForm
        preferences={preferences}
        pomodorosInSession={pomodorosInSessionCount}
        onIntervalChange={handleIntervalChange}
        onPomodorosInSessionChange={handlePomodorosInSessionChange}
        onThemeChange={handleThemeChange}
        onSoundChange={handleSoundChange}
      />
    </Modal>
  );
};
