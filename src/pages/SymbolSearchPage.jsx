import React, { useState, useEffect } from "react";
import { fetchSymbols } from '../services/bitfinex';
import { useNavigate } from 'react-router-dom';

const SymbolSearchPage = () => {
    const [symbols, setSymbols] = useState([]);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

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
          onClick={() =>{
            navigate('/tradehistory/' + symbol)
          }}
         style={{ cursor: 'pointer' }}
         >
         {symbol.toUpperCase()}
         </li>
         ))}
         </ul>
        </div>
      );
};
export default SymbolSearchPage;
