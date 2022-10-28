import { createRoot } from 'react-dom/client';
import { App } from './app';

const app = document.getElementById('root');

const root = createRoot(app!);

root.render(<App />);
