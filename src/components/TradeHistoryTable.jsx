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

    return (
        <div>
          <div className="trade-table">
            <div style={{ display: 'flex', fontWeight: 'bold', padding: '0.5rem 0' }}>
              <div style={{ width: '150px' }}>Amount</div>
              <div style={{ width: '150px' }}>Price</div>
              <div style={{ width: '200px' }}>Date</div>
            </div>
            <List
              height={400}
              itemCount={trades.length}
              itemSize={35}
              width={600}
            >
              {({ index, style }) => {
                const trade = trades[index];
                return (
                  <div style={{ ...style, display: 'flex', padding: '0.5rem 0' }} className="trade-row">
                    <div style={{ width: '150px' }}>{trade[2]}</div>
                    <div style={{ width: '150px' }}>{trade[3]}</div>
                    <div style={{ width: '200px' }}>{new Date(trade[1]).toLocaleString()}</div>
                  </div>
                );
              }}
            </List>
          </div>
        </div>
      );
    };
export default TradeHistoryTable;