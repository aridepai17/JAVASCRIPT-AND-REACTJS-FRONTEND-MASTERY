import React from 'react';
import ReactDOM from 'react-dom/client';
import ExpenseTracker from './ExpenseTracker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ExpenseTracker />
  </React.StrictMode>
);

