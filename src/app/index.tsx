import { Provider } from 'react-redux';
import { UIProvider } from 'components/UIProvider';
import { Box } from 'components/Box';
import { TimerProvider } from 'components/Timer';
import { useThemedFavicon, useIntervalSequence } from 'hooks';
import { ControlPanel } from 'components/ControlPanel';
import { IntervalChip } from 'components/IntervalChip';
import { store, useAppSelector } from 'store';
import { selectCurrentInterval } from 'store/intervals';
import { RemainingTime } from 'components/RemainingTime';

const PomoInterface = () => {
  const currentInterval = useAppSelector(selectCurrentInterval);

  const { onIntervalFinish } = useIntervalSequence();

  useThemedFavicon();

  return (
    <UIProvider>
      <TimerProvider onTimerFinish={onIntervalFinish}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          width="100%"
          mt={8}
        >
          <IntervalChip interval={currentInterval} />

          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            mt={8}
            gap={8}
          >
            <RemainingTime />

            <ControlPanel />
          </Box>
        </Box>
      </TimerProvider>
    </UIProvider>
  );
};

export const App = () => (
  <Provider store={store}>
    <PomoInterface />
  </Provider>
);
