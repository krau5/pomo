import { UIProvider } from 'components/UIProvider';
import { Box } from 'components/Box';
import { TimerProvider } from 'components/Timer';
import { useThemedFavicon, useIntervalSequence } from 'hooks';
import { ControlPanel } from 'components/ControlPanel';
import { IntervalChip } from 'components/IntervalChip';
import { useAppSelector } from 'store';
import { selectCurrentInterval } from 'store/intervals';

export const App = () => {
  const currentInterval = useAppSelector(selectCurrentInterval);

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
          <IntervalChip interval={currentInterval} />

          <Box mt={8}>
            <ControlPanel />
          </Box>
        </Box>
      </TimerProvider>
    </UIProvider>
  );
};
