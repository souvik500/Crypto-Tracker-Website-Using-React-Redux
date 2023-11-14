import React, { useEffect, useState } from 'react'
import { get100Coins } from '../../../functions/get100Coins'
import { MenuItem, Select } from '@mui/material'
import "./styles.css"

export const SelectCoins = ({crypto1,crypto2,handleCoinChange}) => {

    // const[crypto1, setCrypto1] = useState("bitcoin")
    // const[crypto2,setCrypto2] = useState("ethereum")
    const[allCoins, setAllCoins] = useState([]);
    

    const style = {
        height: "2.5rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--white)",
        },
        "& .MuiSvgIcon-root": {
          color: "var(--white)",
        },
        "&:hover": {
          "&& fieldset": {
            borderColor: "#3a80e9",
          },
        },
      };

    useEffect(()=>{
        getData()
    },[])

    async function getData(){
        const myCoins= await get100Coins()
        setAllCoins(myCoins);
        console.log("100 Coins>>>", myCoins)
    }

   return(
   <div className="coins-flex-parent">
   <div className="coins-flex">
      <p>Crypto 1</p>
      <Select
        value={crypto1}
        onChange={(e) => handleCoinChange(e, true)}
        sx={style}
      >
        {allCoins
          .filter((coin) => coin.id != crypto2)
          .map((coin, index) => (
            <MenuItem key={index} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
   </div>

   <div className="coins-flex">
   <p>Crypto 2</p>
   <Select
     
     value={crypto2}
     onChange={(e) => handleCoinChange(e, false)}
     sx={style}
   >
     {allCoins
     .filter((coin) => coin.id != crypto1)
       .map((coin, index) => (
         <MenuItem key={index} value={coin.id}>
           {coin.name}
         </MenuItem>
       ))}
    </Select>
   </div>

   {/* <SelectDays
     days={days}
     handleDaysChange={(e) => handleDaysChange(e)}
     noText={true}
   /> */}
 </div>
);
}

// {allCoins
//     .filter((coin) => coin.id != crypto1)
//     .map((coin, index) => (
//       <MenuItem key={index} value={coin.id}>
//         {coin.name}
//       </MenuItem>
//     ))}