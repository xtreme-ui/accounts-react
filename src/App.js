import React from 'react';
import ProductList from './components/product-list';
import TopBar from './components/top-bar';
import Accounts from "./components/accounts";
import AssetsTab from "./components/assets-tab";
import './App.css';

function App() {
  return (
    <>
      {/* <TopBar className="top-bar" />
      <Accounts />
      <div className="container">
        <ProductList />
      </div> */}
      <AssetsTab />
    </>
  );
}

export default App;
