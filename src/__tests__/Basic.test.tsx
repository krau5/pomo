import { render, screen } from 'testUtils';
import { App } from 'app';

it('renders an app with interval chip, remaining time, and three buttons', () => {
  render(<App />);

  expect(screen.getByTestId('interval-chip')).toHaveTextContent('Focus');

  expect(screen.getByTestId('remaining-time')).toHaveTextContent('5000');

  expect(screen.getByTestId('open-settings')).toBeInTheDocument();
  expect(screen.getByTestId('toggle-timer')).toBeInTheDocument();
  expect(screen.getByTestId('skip-interval')).toBeInTheDocument();
});
