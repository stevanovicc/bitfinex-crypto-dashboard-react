import React from "react";
import TradeHistoryTable from "../components/TradeHistoryTable";
import useWebSocket from '../hooks/useWebSocket';
import { useParams } from "react-router";
import { useNavigate } from "react-router";

const TradeHistoryPage = () => {
    const params = useParams();
    const selectedSymbol = params.symbol;
    const navigate = useNavigate();

    const price = useWebSocket(selectedSymbol);

    return(
        <div>
        <button
          onClick={() => {navigate('/')}}
          >
            Back to Search
          </button>

          {price && (
            <div>
                <h2>Live Price for {selectedSymbol.toUpperCase()}</h2>
                <p>${price}</p>
            </div>
          )}
            <TradeHistoryTable symbol={selectedSymbol}/>
        </div>
    );
};
export default TradeHistoryPage;