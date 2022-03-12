import React from 'react';// Sempre tem que importar o React, pois o jsx está sendo usado
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);// <App /> <-- é um elemento jsx que está sendo renderizado no index.html
