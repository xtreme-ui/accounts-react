import React from 'react';
import ProductList from './components/product-list';
import TopBar from './components/top-bar';
import Accounts from "./components/accounts";
import './App.css';
import StockBar from './components/stockBar';

function App() {
  return (
    <>
      <TopBar className="top-bar" />
      <div>
      <StockBar  className="stockBar" />
      </div>
      <Accounts />
      <div className="container">
        <ProductList />
      </div>
    </>
  );
}

export default App;
