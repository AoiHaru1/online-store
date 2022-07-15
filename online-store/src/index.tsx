import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/app/App';
import { FilterProvider } from './components/context/context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <FilterProvider>
    <App />
  </FilterProvider>
);
