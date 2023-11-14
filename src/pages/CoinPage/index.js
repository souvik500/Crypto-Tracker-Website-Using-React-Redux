import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import Header from "../../components/Common/Header";
import Loader from "../../components/Common/Loader";
import List from "../../components/Dashboard/List";
import { coinObject } from "../../functions/coinObject";
import axios from "axios";
import CoinInfo from "../../components/Coin/CoinInfo";
import { getCoinData } from "../../functions/getCoinData";
import LineChart from "../../components/Coin/LineChart";
import { getCoinPrices } from "../../functions/getCoinPrices";
import { convertDate } from "../../functions/converDate";
import SelectDays from "../../components/Coin/SelectDays";
import { settingChartData } from "../../functions/settingchartData";
import TogglePriceType from "../../components/Coin/TogglePriceType/TogglePriceType";

const CoinPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [chartData, setChartData] = useState({});
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    setIsLoading(true);
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data); //For Coin Obj being passed in the List
      console.log(coinData);
      const prices = await getCoinPrices(id, days, priceType);
      if (prices) {
        settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    }
  };

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, priceType);
    if (prices) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
    console.log("WOHOO! days changed");
  };

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices = await getCoinPrices(id, days, newType);
    if (prices) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grey-wrapper">
          <div className="coin-page-component" style={{ padding: "0rem 1rem" }}>
            <List coin={coinData} />
          </div>
          <div className="chart-container">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <TogglePriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <div>
              <LineChart
                chartData={chartData}
                priceType={priceType}
                
              />
            </div>
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </div>
      )}
    </div>
  );
};

export default CoinPage;