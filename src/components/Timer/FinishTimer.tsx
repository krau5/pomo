import { useCallback } from 'react';
import { Button } from 'components/Button';
import { useTimerContext } from './TimerContext';

export const FinishTimer = () => {
  const { finish } = useTimerContext();

  const handleFinish = useCallback(() => {
    finish();
  }, [finish]);

  return (
    <Button
      aria-label="Finish timer"
      icon="forward"
      onClick={handleFinish}
      variant="secondary"
    />
  );
};
