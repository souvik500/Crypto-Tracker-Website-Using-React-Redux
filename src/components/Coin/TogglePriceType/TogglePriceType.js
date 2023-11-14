import React, { useState } from "react";
import "./styles.css";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function TogglePriceType({ priceType, handlePriceTypeChange }) {
  return (
    <div className="toggle-container">
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={handlePriceTypeChange}
        sx={{
            "&.Mui-selected": {
              color: "var(--blue) !important",
            },
            borderColor: "var(--blue)",
            border: "unset !important",
            "& .MuiToggleButtonGroup-grouped": {
              border: "1px solid var(--blue)!important",
              borderColor: "unset",
              color: "var(--blue) !important ",
            },
            "& .MuiToggleButton-standard": {
              color: "var(--blue) !important",
            },
        }}
      >
        <ToggleButton value="prices">Price</ToggleButton>
        <ToggleButton value="market_caps">Market Cap</ToggleButton>
        <ToggleButton value="total_volumes">Total Volume</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}