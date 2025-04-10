import React from 'react';
import SymbolSearchPage from './pages/SymbolSearchPage';
import TradeHistoryPage from './pages/TradeHistoryPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(){

  return(
    <div className='my-16'>
      <h1>Bitfinex Crypto Dashboard</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={SymbolSearchPage}/>
        <Route path="/tradehistory/:symbol" Component={TradeHistoryPage}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App; 