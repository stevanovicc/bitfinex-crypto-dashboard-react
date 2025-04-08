import React, { useState, useEffect } from 'react';
import { fetchSymbols } from '../services/bitfinex';
import useWebSocket from '../hooks/useWebSocket';

const SymbolSearch = ({ onSelect }) => {
    const [symbols, setSymbols] = useState([]);
    const [query, setQuery] = useState('');
    const [selectedSymbol, setSelectedSymbol] = useState(null);

    const price = useWebSocket(selectedSymbol);

    useEffect(() => {
        fetchSymbols().then(setSymbols);
    }, []);

    const filteredSymbols = symbols.filter((symbol) =>
        symbol.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
          <input
            type="text"
            placeholder="Search symbol..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <ul>
          {filteredSymbols.map((symbol) => (
         <li
          key={symbol}
          onClick={() => {
          setSelectedSymbol(symbol);
          onSelect(symbol);
          }}
         style={{ cursor: 'pointer' }}
         >
         {symbol.toUpperCase()}
         </li>
         ))}
         </ul>

          {selectedSymbol && price && (
            <div>
                <h2>Live Price for {selectedSymbol.toUpperCase()}</h2>
                <p>${price}</p>
            </div>
          )}

        </div>
      );
};

export default SymbolSearch;