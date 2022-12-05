import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'app';
import { store } from 'store';

const rootNode = document.getElementById('root');

const root = createRoot(rootNode!);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

root.render(app);
