import { createRoot } from 'react-dom/client';
import { App } from 'app';
import { Provider } from 'react-redux';
import { store } from 'store';

const rootNode = document.getElementById('root');

const root = createRoot(rootNode!);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

root.render(app);
