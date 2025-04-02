import React,{useState,useEffect} from "react";
import { fetchTrades } from "../services/bitfinex";
import { FixedSizeList as List } from "react-window";

const TradeHistoryTable = ({symbol}) => {
    const [trades,setTrades] = useState([]);
    
    useEffect(() => {
        const fetchData = async() => {
            const tradeData = await fetchTrades(symbol);
            setTrades(tradeData);
        };

        if(symbol){
            fetchData();
        }
    }, [symbol]);

    const Row = ({ index,style }) => {
        const trade = trades [index];
        return (
            <div style={style} className="trade-row">
                <div>{trade[2]}</div>
                <div>{trade[3]}</div>
                <div>{new Date(trade[1]* 1000).toLocaleDateString()}</div>
            </div>
        );
    };

    return(
        <div>
            <h2>Trade History for {symbol}</h2>
            <div className="trade-table">
                <List
                height={400}
                itemCount={trades.length}
                itemSize={35}
                width={600}
                >
                {Row}
                </List>
            </div>
        </div>
    );
};
export default TradeHistoryTable;