import React from 'react';
import logo from './logo.svg';
import './App.css';

import Conversor from "./components/Conversor"

function App() {
  return (
    <div className="App">
      <Conversor key="#" moedaA="USD" moedaB="BRL"></Conversor>
    </div>
  );
}

export default App;
