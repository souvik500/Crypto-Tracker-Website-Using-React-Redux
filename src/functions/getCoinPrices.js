import axios from "axios";

export const getCoinPrices = (id, days, priceType) => {
  const prices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((response) => {
      if (priceType == "market_caps") {
        console.log("MARKET_CAPS>>>" ,response.data.market_caps)
        return response.data.market_caps;
      } else if (priceType == "total_volumes") {
        console.log("TOTAL_VOLUMES>>>" ,response.data.total_volumes)
        return response.data.total_volumes;
      } else {
        console.log("PRICES>>>", response.data.prices)
        return response.data.prices;
      }
    })
    // .then((response)=>{
    //   console.log(priceType , response.data[priceType])
    //   return response.data[priceType];
    // })
    .catch((error) => {
      console.log("ERROR>>>", error);
    });

  if (prices) {
    return prices;
  } else {
    return;
  }
};