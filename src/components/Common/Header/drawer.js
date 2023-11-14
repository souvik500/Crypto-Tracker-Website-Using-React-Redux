import { useState,useEffect}  from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import Switch from "@mui/material/Switch";
import { toast } from "react-toastify";


export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    if (localStorage.getItem("theme") != "dark") {
      setDark();
    } else {
      setLight();
    }
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };
  
  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="link" />
    </IconButton>
    <Drawer anchor={"right"} open={open} onClose={()=> setOpen(false)}>
                  <div className="drawer-div">
                        <Link to="/"><p className="link">Home</p></Link>
                        <Link to="/compare"><p className="link">Compare</p></Link>
                        <Link to="/watchlist"><p className="link">Watchlist</p></Link>
                        <Link to="/dashboard"><p className="link">Dashboard</p></Link>
                        <Switch checked={darkMode} onClick={() => changeMode()} />
                   </div>
    </Drawer>
    </div>
  )    
}