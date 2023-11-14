import React, { useEffect, useState } from "react";
import Header from "../../components/Common/Header";
import { SelectCoins } from "../../components/Compare/SelectCoins";
import SelectDays from "../../components/Coin/SelectDays";
import "./styles.css";
import { coinObject } from "../../functions/coinObject";
import { getCoinData } from "../../functions/getCoinData";
import { getCoinPrices } from "../../functions/getCoinPrices";
import { settingChartData } from "../../functions/settingchartData";
import List from "../../components/Dashboard/List";
import Loader from "../../components/Common/Loader";
import CoinInfo from "../../components/Coin/CoinInfo";
import LineChart from "../../components/Coin/LineChart";
import { useActionData } from "react-router-dom";
import TogglePriceType from "../../components/Coin/TogglePriceType/TogglePriceType";
//import { setDatasets } from 'react-chartjs-2/dist/utils'

const ComparePage = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [isLoading, setIsLoading] = useState(true);

  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const [days, setDays] = useState(30);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setIsLoading(true);
    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);
    coinObject(setCrypto1Data, data1);
    coinObject(setCrypto2Data, data2);
    if (data1 && data2) {
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      settingChartData(
        setChartData,
        prices1,
        prices2,
        crypto1Data,
        crypto2Data
      );
      console.log("Both PRICES>>>", prices1, prices2);
      setIsLoading(false);
    }
  }

  async function handleDaysChange(event) {
    setIsLoading(true);
    setDays(event.target.value);
    const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
    const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);
    settingChartData(setChartData, prices1, prices2, crypto1Data, crypto2Data);
    setIsLoading(false);
  }

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices1 = await getCoinPrices(crypto1, days, newType);
    const prices2 = await getCoinPrices(crypto2, days, newType);
    settingChartData(setChartData, prices1, prices2, crypto1Data, crypto2Data);
    setIsLoading(false);
  };

  async function handleCoinChange(event, isCrypto1) {
    setIsLoading(true);
    if (isCrypto1) {
      setCrypto1(event.target.value);
      console.log("crypto1 id", event.target.value);
      const data1 = await getCoinData(event.target.value);
      coinObject(setCrypto1Data, data1); //For Coin Obj being passed in the List
      if (data1) {       
        const prices1 = await getCoinPrices((crypto1, days, priceType));
        const prices2 = await getCoinPrices(crypto2, days, priceType);
        settingChartData(
          setChartData,
          prices1,
          prices2,
          crypto1Data,
          crypto2Data
        );
        console.log("CHANGED COIN PRICES 1st", prices1, prices2)
      }
    } else {
      setCrypto2(event.target.value);
      console.log("crypto2 id", event.target.value);
      const data2 = await getCoinData(event.target.value);
      coinObject(setCrypto2Data, data2); //For Coin Obj being passed in the List
      if (data2) {
        
        const prices1 = await getCoinPrices(crypto1, days, priceType);
        const prices2 = await getCoinPrices(
          (crypto2, days, priceType)
        );
        console.log("CHANGED COIN PRICES 2nd", prices1, prices2)
        settingChartData(
          setChartData,
          prices1,
          prices2,
          crypto2Data,
          crypto1Data
        );
      }
    }
    setIsLoading(false);
  }

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="compare-selects-conatiner">
            <SelectCoins
              crypto1={crypto1}
              handleCoinChange={handleCoinChange}
              crypto2={crypto2}
            />
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
          </div>
          <div className="coin-page-component" style={{ padding: "0rem 1rem" }}>
            <List coin={crypto1Data} />
          </div>
          <div className="coin-page-component" style={{ padding: "0rem 1rem" }}>
            <List coin={crypto2Data} />
          </div>
          <div className="chart-container">
            <TogglePriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart
              chartData={chartData}
              priceType={priceType}
              multiaxis={true}
            />
          </div>
          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        </>
      )}
    </div>
  );
};

export default ComparePage;