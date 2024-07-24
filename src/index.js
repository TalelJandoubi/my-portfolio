import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css'; // Assurez-vous que ce fichier existe
import App from './App'; // Vérifiez que ce chemin est correct et que App.js existe
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
