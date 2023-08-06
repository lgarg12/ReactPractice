import React from 'react';
import './App.css';
import { Products } from './Products/Products';
import { Carts } from './Carts/Carts'

function App() {
  return (
    <div className="flex justify-between">
      <Products/>
      <Carts/>
    </div>
  );
}

export default App;
