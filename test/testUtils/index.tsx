import { cleanup, render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { UIProvider } from 'components/UIProvider';
import { store } from 'store';

afterEach(() => {
  cleanup();
});

export const renderComponent = (ui: React.ReactElement, options = {}) => {
  return render(ui, {
    wrapper: ({ children }) => (
      <Provider store={store}>
        <UIProvider>{children}</UIProvider>
      </Provider>
    ),
    ...options,
  });
};

export * from '@testing-library/react';
export { user };
