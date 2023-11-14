import React,{useState} from 'react';
import "./styles.css"
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationComponent({page,handlePageChange}) {

//   const handlePageChange = (event , value) => {
//     setPage(value);
//   };

  return (
    <div className='pagination-component'>
      <Typography className='page-num'>Page: <span>{page}</span></Typography>
      
      <Pagination 
      sx={{
        color: "var(--white)",
          "& .MuiPaginationItem-text": {
            color: "#fff !important",
            border: "1px solid var(--grey)",
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "transparent !important",
          },
          "& .Mui-selected  ": {
            backgroundColor: "var(--blue) !important",
            borderColor: "var(--blue) !important",
            color: "#fff !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid grey !important",
          },
        }}
      count={10} page={page} onChange={(e,v)=>handlePageChange(e,v)} />
    </div>
  );
}