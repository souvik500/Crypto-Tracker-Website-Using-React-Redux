import { ArrowUpwardRounded } from '@mui/icons-material'
import React from 'react'
import "./style.css"

const BackToTop = () => {
    let mybutton = document.getElementById("my-btn")

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


  return (
    <div className='back-to-top-btn' id="my-btn" onClick={()=>topFunction()}> 
    <ArrowUpwardRounded />
    </div>
  )
}

export default BackToTop