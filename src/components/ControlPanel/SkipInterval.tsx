import { useCallback } from 'react';
import { Button } from 'components/Button';
import { useTimerContext } from 'components/Timer';

export const SkipInterval = () => {
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
      data-testid="skip-interval"
    />
  );
};
