import { h } from 'preact';
import { useCallback, useContext, useEffect, useMemo, useState } from 'preact/compat';
import { ProgressBar } from 'components/ProgressBar';
import { Button } from 'components/Button';
import { AppContext } from 'app/AppContext';
import { PomodoroIntervals } from 'types';

export const Timer = () => {
  const { currentInterval, setCurrentInterval, intervals } = useContext(AppContext);
  const currentIntervalTime = intervals[currentInterval] * 60;

  const sound = new Audio('src/assets/sounds/ring.mp3');
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [timer, setTimer] = useState(0);

  const handlePause = useCallback(() => {
    setIsPaused(true);
  }, [sound]);

  const handlePlay = useCallback(() => {
    setIsPaused(false);
    sound.play();
  }, [sound]);

  const getNextInterval = useCallback((): PomodoroIntervals => {
    if (currentInterval === 'longBreak' || currentInterval === 'shortBreak') {
      return 'pomodoro';
    }

    return 'shortBreak';
  }, [currentInterval]);

  const resetTimer = useCallback(() => {
    setCurrentInterval('pomodoro');
    setPomodoroCount(0);
    setIsPaused(true);
    setTimer(0);
  }, []);

  const progress = useMemo(() => timer / currentIntervalTime * 100, [currentIntervalTime, timer]);

  useEffect(() => {
    if (timer >= currentIntervalTime) {
      if (currentInterval === 'pomodoro' && pomodoroCount === 3) {
        sound.play();

        setPomodoroCount(0);
        setCurrentInterval('longBreak');
        setTimer(0);
        return;
      }

      if (currentInterval === 'pomodoro') {
        setPomodoroCount((count) => count + 1);
      }

      sound.play();
      setCurrentInterval(getNextInterval());
      setTimer(0);
    }
  },  [currentInterval, currentIntervalTime, getNextInterval, pomodoroCount, timer]);

  useEffect(() => {
    if (!isPaused && timer <= currentIntervalTime) {
      const interval = setInterval(() => {
        setTimer(timer + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }

    return () => {};
  }, [currentIntervalTime, isPaused, timer]);

  useEffect(() => {
    resetTimer();
  }, [intervals, resetTimer]);

  return (
    <ProgressBar progress={progress}>
      {isPaused && <Button color="primary" icon="play_circle_outline"  onClick={handlePlay} size="large" />}

      {!isPaused && <Button color="primary" icon="pause_circle_outline" onClick={handlePause} size="large" />}
    </ProgressBar>
  );
};
