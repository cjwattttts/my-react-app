import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Import the App component
import './style.css';     // Import styles (if needed)

ReactDOM.createRoot(document.getElementById('app')).render(  // Renders the App into the DOM
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
