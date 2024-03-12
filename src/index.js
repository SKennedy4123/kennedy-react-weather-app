import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

document.title = "React Weather App";

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
