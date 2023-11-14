import React,{useState} from "react"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import "./styles.css"

const Search =({search,onSearchChange})=>{

    
    return(
        <div className="search-container">
            <SearchRoundedIcon />
             <input type="text"  placeholder="Search" 
             value={search}
             onChange={(e)=>onSearchChange(e)}
             />
        </div>

    )
}

export default Search