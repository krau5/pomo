import { UIProvider } from 'components/UIProvider';
import { Box } from 'components/Box';
import { TimerProvider } from 'components/Timer';
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
