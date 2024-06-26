import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ContextProvider from './Context/Contexts.jsx'; // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ContextProvider>
      <App />
    </ContextProvider>
);
