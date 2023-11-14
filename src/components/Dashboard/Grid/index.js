import React,{useState} from 'react'
import "./styles.css"
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { RemoveFromWatchlist } from '../../../functions/RemoveFromWatchlist';
import { SaveCoinToWatchlist } from '../../../functions/SaveCoinToWatchlist';


const Grid  = ({coin}) => {

    //const [added, setAdded] = useState(hasBeenAdded(coin.id));
    const watchlist = JSON.parse(localStorage.getItem("watchlist"));
      const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));

  return (
    <Link to={`/coin/${coin.id}`}>
         <div   className={`grid-container ${
          coin.price_change_percentage_24h < 0 && "grid-container-red"
        }`}>
            <div className='info-flex'>
                <img src={coin.image} className='coin-logo' />
                <div className='name-col'>
                    <p className='coin-symbol'>{coin.symbol}-USD</p>
                    <p className='coin-name'>{coin.name}</p>
                </div>
                <div
              className={`watchlist-icon ${
                coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
              }`}
              onClick={(e) => {
                if (isCoinAdded) {
                  // remove coin

                  RemoveFromWatchlist(e, coin.id, setIsCoinAdded);
                } else {
                  setIsCoinAdded(true);
                  SaveCoinToWatchlist(e, coin.id);
                }
              }}
            >
              {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
            </div>
            </div>
            {
            coin.price_change_percentage_24h > 0 ?
            (<div className='chip-flex'>               
                <div className='price-chip'>+{coin.price_change_percentage_24h.toFixed(2)}%</div>
                <div className="chip-icon"><TrendingUpRoundedIcon /></div>
                
            </div>)
            :
            (<div className='chip-flex'>               
                <div className='price-chip red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                <div className="chip-icon chip-red"><TrendingDownRoundedIcon /></div>
             </div>)
            }

            <div className="info-container">
                <h4 className="coin-price" style={{color:coin.price_change_percentage_24h>0 ? "var(--green)" : "var(--red)"}}>${coin.current_price.toLocaleString()}</h4>
            </div>
            <div>
            <p className="total-volume">
                 Total Volume : {coin.total_volume.toLocaleString()}
            </p>
            </div>
            <div>
            <p className="market-cap">
                Market Capital : ${coin.market_cap.toLocaleString()}
            </p>
            </div>
            
        </div>
    </Link>
  )
}

export default Grid 