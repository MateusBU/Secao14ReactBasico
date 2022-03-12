import React from 'react'; // Sempre tem que importar o React, pois o jsx está sendo usado
import Main from './components/Main';
import './App.css';

// Componente REACT
export default function App() {
  return <Main />; // classe Main em Main.js
  // para o return tem que ter apenas um elemento externo,
  // se tiver mais dentro de elemento dentro desse elemento no problem
}
