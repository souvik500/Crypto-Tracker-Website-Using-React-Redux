import { toast } from "react-toastify";
export const RemoveFromWatchlist = (e, id, setIsCoinAdded) => {
  e.preventDefault();
  if (window.confirm("Are you sure you want to remove this coin")) {
    // let items= JSON.parse(localStorage.getItem("watchlist"))
    // localStorage.setItem(JSON.stringify(items.filter((coin)=>coin!==id)))
    let watchlist = JSON.parse(localStorage.getItem("watchlist"));
    const newList = watchlist.filter((coin) => coin != id);
    setIsCoinAdded(false);
    localStorage.setItem("watchlist", JSON.stringify(newList));
    toast.success(
      "${id.slice(0,1).toUpperCase() + id.slice(1)} removed from watchlist!"
    );
    window.location.reload();
  } else {
    toast.error("${Could not remove coin from Watchlist}");
    setIsCoinAdded(true);
  }
};
// if (window.confirm("Are you sure you want to remove this coin?")) {
//     let watchlist = JSON.parse(localStorage.getItem("watchlist"));
//     const newList = watchlist.filter((coin) => coin != id);
//     setIsCoinAdded(false);
//     localStorage.setItem("watchlist", JSON.stringify(newList));
//     toast.success(
//       `${
//         id.substring(0, 1).toUpperCase() + id.substring(1)
//       } - has been removed!`
//     );
//     window.location.reload();
//   } else {
//     toast.error(
//       `${
//         id.substring(0, 1).toUpperCase() + id.substring(1)
//       } - could not be removed!`
//     );
//     setIsCoinAdded(true);
//   }