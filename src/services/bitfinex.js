import axios from "axios";

const API_BASE = '/bitfinex-api/v2';

export const fetchSymbols = async() => {
    try {
        const response = await axios.get(`${API_BASE}/conf/pub:list:pair:exchange`);
        console.log("Api Response:", response.data);
        return response.data[0];
    } catch (error) {
        console.error('Error fetching symbols:', error);
        return [];
    }
};

export const fetchTrades = async(symbol) => {
    try {
        const response = await axios.get(`${API_BASE}/trades/t${symbol}/hist`);
        return response.data;
    } catch (error) {
        console.error("Error fetching trades:", error);
        return [];
    }
};