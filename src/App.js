import React from 'react';
import { AppBar } from './components/AppBar';
import './App.css';
import { ListProducts } from './components/ListProducts';

const App = () => {
  return (
    <>
      <AppBar />
      <ListProducts />
    </>
  );
}

export default App;
