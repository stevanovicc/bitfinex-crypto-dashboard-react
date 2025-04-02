import {useState,useEffect} from "react";

const useWebSocket = (symbol) => {
    const [price, setPrice] = useState (null);

    useEffect(() => {
        if (!symbol) return;

        const socket = new WebSocket(`wss://api.bitfinex.com/ws/2`);

        socket.onopen = () => {
            socket.send(JSON.stringify({
                event: 'subscribe',
                channel: 'ticker',
                symbol: `t${symbol.toUpperCase()}`,
            }));
        };

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (Array.isArray(data) && data[1]) {
                setPrice(data[1][6]);
            }
        };

        socket.onclose = () => {
            console.log("WebSocket closed");
        };

        return () => {
            socket.close();
        };
    }, [symbol]);

    return price;
};

export default useWebSocket;