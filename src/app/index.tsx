import { UIProvider } from 'ui/UIProvider';
import { Box } from 'ui/Box';
import { TimerProvider } from 'ui/Timer';
import { useThemedFavicon, useIntervalSequence } from 'hooks';
import { ControlPanel } from 'components/ControlPanel';
import { IntervalChip } from 'components/IntervalChip';

export const App = () => {
  const { onTimerFinish } = useIntervalSequence();

  useThemedFavicon();

  return (
    <UIProvider>
      <TimerProvider onTimerFinish={onTimerFinish}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          fullWidth
          mt={8}
        >
          <IntervalChip />

          <Box mt={8}>
            <ControlPanel />
          </Box>
        </Box>
      </TimerProvider>
    </UIProvider>
  );
};
