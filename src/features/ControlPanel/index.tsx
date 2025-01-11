import { useEffect, useMemo, useRef, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { getRemainingTime } from 'features/RemainingTime';
import { useTimerContext } from 'components/Timer';
import { Box } from 'components/Box';
import { useAppSelector } from 'store';
import { selectCurrentInterval, selectIntervals } from 'store/intervals';
import { selectIsSoundEnabled } from 'store/settings';
import { useTimeTitle } from 'hooks';
import { Button } from 'components/Button';
import { ToggleTimer } from './ToggleTimer';
import { SkipInterval } from './SkipInterval';

type Props = {
  onSettingsClick: () => void;
};

export const ControlPanel = ({ onSettingsClick }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const intervals = useAppSelector(selectIntervals, shallowEqual);
  const currentInterval = useAppSelector(selectCurrentInterval);
  const isSoundEnabled = useAppSelector(selectIsSoundEnabled);

  const {
    isPaused,
    timer,
    duration,
    start: startTimer,
    reset: resetTimer,
  } = useTimerContext();

  const [wasOnceStarted, setWasOnceStarted] = useState(false);

  const currentIntervalTime = useMemo(
    () => intervals[currentInterval] * 60,
    [currentInterval, intervals],
  );

  const { minutes, seconds } = useMemo(
    () => getRemainingTime(duration, timer),
    [duration, timer],
  );

  useEffect(() => {
    if (!isPaused && !wasOnceStarted) {
      setWasOnceStarted(true);
    }
  }, [isPaused, wasOnceStarted]);

  useEffect(() => {
    resetTimer();
  }, [intervals, resetTimer]);

  useEffect(() => {
    if (!isPaused && timer === 0) {
      resetTimer();
      startTimer(currentIntervalTime);
    }
  }, [currentIntervalTime, isPaused, resetTimer, startTimer, timer]);

  useEffect(() => {
    if (timer === currentIntervalTime && isSoundEnabled) {
      audioRef.current?.play();
    }
  }, [currentIntervalTime, isSoundEnabled, timer]);

  useTimeTitle(minutes, seconds, wasOnceStarted);

  return (
    <Box display="flex" alignItems="center">
      <Button
        aria-label="Open settings"
        icon="dots"
        onClick={onSettingsClick}
        variant="secondary"
      />

      <Box px={4}>
        <ToggleTimer duration={currentIntervalTime} initialCount={timer} />
      </Box>

      <SkipInterval />

      <audio src="/sounds/ring.mp3" ref={audioRef} />
    </Box>
  );
};
