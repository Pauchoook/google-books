import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux/es/exports';
import App from './App';
import './index.css';
import { setupStore } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);