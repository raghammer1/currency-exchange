import axios from 'axios';
import { useEffect, useState } from 'react';
import Selection from './Selection';
import Value from './Value';
import Amount from './Amount';
import './App.css';

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState(0);
  const [exRate, setExRate] = useState(0);
  const [isExchangeCalculated, setIsExchangeCalculated] = useState(false);

  const curApi = process.env.REACT_APP_CUR_API;

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

    const rate = res.data;
    return rate.data[Object.keys(rate.data)[0]]?.value;
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://api.currencyapi.com/v3/latest', {
        headers: { apiKey: curApi },
      });
      setCurrencies(res.data.data);
    };
    fetchData();
  }, []);

  const exchangeNow = async () => {
    const rate = await getExchangeRate(fromCurrency, toCurrency);
    setExRate(parseFloat(rate) * parseFloat(amount));
    setIsExchangeCalculated(true);
  };

  useEffect(() => {
    setIsExchangeCalculated(false);
  }, [fromCurrency, toCurrency, amount]);

  if (!curApi) {
    return <div className="error">Please provide a valid API key!</div>;
  }

  return (
    <div className="app">
      <div className="container">
        <h1>Currency Converter</h1>
        <Selection
          items={Object.keys(currencies)}
          fromCurrency={fromCurrency}
          setFromCurrency={setFromCurrency}
          toCurrency={toCurrency}
          setToCurrency={setToCurrency}
        />
        <Amount
          amount={amount}
          setAmount={setAmount}
          fromCurrency={fromCurrency}
        />
        <Value exchangeNow={exchangeNow} />
        {isExchangeCalculated && (
          <div className="result">
            <h3>
              Exchange Rate: {exRate.toFixed(2)} {toCurrency}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
