import React, {useState} from 'react';
import SymbolSearch from './components/SymbolSearch';
import TradeHistoryTable from './components/TradeHistoryTable';

function App(){
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  const handleSymbolSelect = (symbol) => {
    setSelectedSymbol(symbol);
  };

  return(
    <div className='App'>
      <h1>Bitfinex Crypto Dashboard</h1>

      <SymbolSearch onSelect={handleSymbolSelect}/>

      {selectedSymbol && (
        <div>
          <h2>Trade History for {selectedSymbol.toUpperCase()}</h2>
          <TradeHistoryTable symbol={selectedSymbol}/>
        </div> 
      )}
    </div>
  );
};

export default App;