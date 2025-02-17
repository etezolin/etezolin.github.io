import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import history from './services/history';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/etezolin.github.io" history={history}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
