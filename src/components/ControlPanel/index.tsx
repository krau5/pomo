import { useEffect, useMemo, useRef, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { Settings } from 'components/Settings';
import { FinishTimer, TimeLeft, ToggleTimer, useTimerContext } from 'ui/Timer';
import { Box } from 'ui/Box';
import { useAppSelector } from 'store';
import { selectCurrentInterval, selectIntervals } from 'store/intervals';
import { selectIsSoundEnabled } from 'store/settings';
import { getTimeLeft } from 'utils/getTimeLeft';
import { useTimeTitle } from 'hooks/useTimeTitle';

export const ControlPanel = () => {
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
    () => getTimeLeft(duration, timer),
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
    <Box display="flex" alignItems="center" flexDirection="column">
      <TimeLeft />

      <Box display="flex" alignItems="center" mt={8}>
        <Settings />

        <Box px={4}>
          <ToggleTimer duration={currentIntervalTime} initialCount={timer} />
        </Box>

        <FinishTimer />
      </Box>

      <audio src="/sounds/ring.mp3" ref={audioRef} />
    </Box>
  );
};
