import { useCallback } from 'react';
import { Button } from 'components/Button';
import { useTimerContext } from './TimerContext';

export const FinishTimer = () => {
  const { setTimer, finish } = useTimerContext();

  const handleFinish = useCallback(() => {
    setTimer(0);
    finish();
  }, [finish, setTimer]);

  return (
    <Button
      aria-label="Finish timer"
      icon="forward"
      onClick={handleFinish}
      variant="secondary"
    />
  );
};
