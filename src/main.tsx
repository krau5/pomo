import { h, render } from 'preact';
import { App } from './App';
import './index.css';

const app = document.getElementById('root')

if (app) {
  render(<App />, app);
}
