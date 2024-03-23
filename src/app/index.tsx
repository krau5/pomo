import { Provider } from 'react-redux';
import { UIProvider } from 'components/UIProvider';
import { Box } from 'components/Box';
import { TimerProvider } from 'components/Timer';
import { useThemedFavicon, useIntervalSequence } from 'hooks';
import { ControlPanel } from 'components/ControlPanel';
import { IntervalChip } from 'components/IntervalChip';
import { store, useAppSelector } from 'store';
import { selectCurrentInterval } from 'store/intervals';

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

export const App = () => (
  <Provider store={store}>
    <PomoInterface />
  </Provider>
);
