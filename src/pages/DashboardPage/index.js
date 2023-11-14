import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Header from "../../components/Common/Header";
import TabsComponent from "../../components/Dashboard/TabsComponent";
import { LineAxisOutlined } from "@mui/icons-material";
import Search from "../../components/Dashboard/Search";
import PaginationComponent from "../../components/Dashboard/PaginationComponent.js";
import Loader from "../../components/Common/Loader";
import BackToTop from "../../components/Common/BackToTop";
import { get100Coins } from "../../functions/get100Coins";

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [isLoading, setIsLoading] =useState(true);

  const onSearchChange=(e)=>{
    setSearch(e.target.value)
    console.log(search)
  }

  let filteredCoins = coins.filter((coin) => {
    if (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    ) {
      return coin;
    }
  });

  const handlePageChange = (event, value) => {
    setPage(value);
    // Value = new page number
    var initialCount = (value - 1) * 10;
    setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
  };

  useEffect(() => {
    // axios
    //   .get(
    //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    //   )
    //   .then((response) => {
    //     console.log("RESPONSE>>>", response);
    //     setCoins(response.data);
    //     setPaginatedCoins(response.data.slice(0,10))
    //     setIsLoading(false)
    //   })
    //   .catch((error) => {
    //     console.log("ERROR>>>", error);
    //    setIsLoading(false)
    //    });
    getData()
  }, []);

  const getData = async()=>{
    const myCoins = await get100Coins();
    if(myCoins){
      setCoins(myCoins)
      setPaginatedCoins(myCoins.slice(0,10))
      setIsLoading(false)
    }
  }

  return (
    <div>
      <Header />
      {
        isLoading ? 
        <Loader /> :  
        <div>
          <Search  search={search}  onSearchChange={onSearchChange} />
          <TabsComponent coins={search ? filteredCoins : paginatedCoins}  setSearch={setSearch} />
          {!search && (
                <PaginationComponent
                  page={page}
                  handlePageChange={handlePageChange}
                />
              )}
          {/* <BackToTop /> */}
        </div>
      }   
    </div>
  );
};

// coins == 100 coins

// PaginatedCoins -> Page 1 - coins.slice(0,10)
// PaginatedCoins -> Page 2 = coins.slice(10,20)
// PaginatedCoins -> Page 3 = coins.slice(20,30)
// .
// .
// PaginatedCoins -> Page 10 = coins.slice(90,100)

// PaginatedCoins -> Page X , then initial Count = (X-1)*10
// coins.slice(initialCount,initialCount+10)

export default DashboardPage;