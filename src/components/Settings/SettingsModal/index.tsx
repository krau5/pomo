import { shallowEqual } from 'react-redux';
import { ChangeEvent, useCallback, useState } from 'react';
import { useAppSelector } from 'store';
import { selectIntervals, selectPomodorosInSession } from 'store/intervals';
import { useSettings } from 'hooks';
import { PomodoroIntervals } from 'types';
import { Modal } from 'ui/Modal';
import { SettingsForm } from './SettingsForm';

type Props = {
  isOpened?: boolean;
  onClose?: () => void;
};

export const SettingsModal = ({ isOpened, onClose }: Props) => {
  const initialIntervals = useAppSelector(selectIntervals, shallowEqual);
  const initialPomodorosInSession = useAppSelector(selectPomodorosInSession);

  const {
    toggleSound,
    toggleDarkMode,
    updatePomodorosInSessionCount,
    updateIntervals,
  } = useSettings();

  const [intervals, setIntervals] = useState(initialIntervals);
  const [pomodorosInSession, setPomodorosInSession] = useState<string | number>(
    initialPomodorosInSession,
  );

  const handleClose = useCallback(() => {
    updateIntervals(intervals);
    updatePomodorosInSessionCount(pomodorosInSession);

    if (onClose) {
      onClose();
    }
  }, [
    updateIntervals,
    intervals,
    updatePomodorosInSessionCount,
    pomodorosInSession,
    onClose,
  ]);

  const handleIntervalChange = useCallback(
    (interval: PomodoroIntervals) => (event: ChangeEvent<HTMLInputElement>) => {
      setIntervals((previousIntervals) => ({
        ...previousIntervals,
        [interval]: event.target.value,
      }));
    },
    [],
  );

  const handlePomodorosInSessionChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPomodorosInSession(event.target.value);
    },
    [],
  );

  const handleThemeChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      toggleDarkMode({ enable: event.target.checked });
    },
    [toggleDarkMode],
  );

  const handleSoundChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      toggleSound({ enable: event.target.checked });
    },
    [toggleSound],
  );

  return (
    <Modal isOpened={isOpened} onClose={handleClose} title="Settings">
      <SettingsForm
        intervals={intervals}
        pomodorosInSession={pomodorosInSession}
        onIntervalChange={handleIntervalChange}
        onPomodorosInSessionChange={handlePomodorosInSessionChange}
        onThemeChange={handleThemeChange}
        onSoundChange={handleSoundChange}
      />
    </Modal>
  );
};
