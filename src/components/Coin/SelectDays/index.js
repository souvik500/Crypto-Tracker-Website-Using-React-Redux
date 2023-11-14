import React,{useState} from 'react'
import "./styles.css"

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectDays({days,handleDaysChange}) {
 
  return (
    <div className="select-days"> 
        <p>Price Change in</p>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Day"
          onChange={handleDaysChange}
          sx={{
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
          }}
        >
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={10}>10 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
        </Select>
     
    </div>
  );
}