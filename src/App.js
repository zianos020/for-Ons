// src/App.js
import React from 'react';
import './App.css';
import ProductList from './ProductList';
import AddProduct from './AddProduct';

function App() {
  return (
    <div className="App">
      <h1>Product Management</h1>
      <AddProduct />
      <ProductList />
    </div>
  );
}

export default App;
