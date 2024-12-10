import { createRoot } from 'react-dom/client';
import { App } from 'app';

const rootNode = document.getElementById('root');

const root = createRoot(rootNode!);

root.render(<App />);
