import React, { useState,useEffect } from "react";
import Header from "../../components/Common/Header";
import TabsComponent from "../../components/Dashboard/TabsComponent";
import { get100Coins } from "../../functions/get100Coins";
import Button from "../../components/Common/Button";

const WatchListPage = () => {
//   const coins = JSON.parse(localStorage.getItem("watchlist"));
//   const [myWatchlist, setMywatchlist] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     getData();
//   }, []);

//   async function getData() {
//     setIsLoading(true);
//     const allCoins = await get100Coins();
//     if (coins) {
//       setMywatchlist(allCoins.filter((coin) => coins.includes(coin.id)));
//     }
//     setIsLoading(false);
//   }

//   return (
//     <div>
//       <Header />
//       {myWatchlist ? (
//         <div style={{ minHeight: "90vh" }}>
//           <TabsComponent coins={myWatchlist} />
//         </div>
//       ) : (
//         <div>
//           <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
//             No Items in the Watchlist
//           </h1>
//           <div style={{ display: "flex", justifyContent: "center" }}>
//             <a href="/dashboard">
//               <Button text={"Dashboard"} />
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

const watchlist = JSON.parse(localStorage.getItem("watchlist"));
console.log("WATCHLIST>>>>",watchlist)
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (watchlist) {
     console.log( getData());
      
    }
  }, []);

  const getData = async () => {
    const allCoins = await get100Coins();
    if (allCoins) {
      setCoins(allCoins.filter((coin) => watchlist.includes(coin.id)));
      console.log("Watchlist coins>>", coins)
    }
  };

  return (
    <div>
      <Header />
      {watchlist?.length > 0 ? (
        <TabsComponent coins={coins} />
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Sorry, No Items In The Watchlist.
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <a href="/dashboard">
              <Button text="Dashboard" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}


export default WatchListPage;