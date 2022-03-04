import React from 'react';
import ProductList from './components/product-list';
import TopBar from './components/top-bar';
import Accounts from "./components/accounts";
import './App.css';

function App() {
  return (
    <>
      <TopBar className="top-bar" />
      <Accounts profileId={789}/>
      <div className="container">
        <ProductList />
      </div>
    </>
  );
}

export default App;
