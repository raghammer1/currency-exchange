import currencyapi from '@everapi/currencyapi-js';
// require('dotenv').config();
import axios from 'axios';
import { useEffect, useState } from 'react';
import Selection from './Selection';

function App() {
  const [currencies, setCurrencies] = useState([]);
  const curApi = process.env.REACT_APP_CUR_API;
  console.log(curApi);

  const getExchangeRate = async (baseCur, curr) => {
    const res = await axios.get('https://api.currencyapi.com/v3/latest', {
      params: {
        base_currency: baseCur,
        currencies: curr,
      },
      headers: {
        apikey: curApi,
      },
    });
    console.log(res);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://api.currencyapi.com/v3/latest', {
        headers: { apiKey: curApi },
      });
      setCurrencies(res.data.data);
      console.log(Object.keys(res.data.data));
    };
    fetchData();
  }, []);

  if (!curApi) {
    return <div>Please provide a valid API key!</div>;
  }

  return (
    <div className="App">
      <Selection items={Object.keys(currencies)} />
    </div>
  );
}

export default App;
