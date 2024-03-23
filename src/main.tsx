import { createRoot } from 'react-dom/client';
import { App } from 'app';

const rootNode = document.getElementById('root');

const root = createRoot(rootNode!);

const app = <App />;

root.render(app);
