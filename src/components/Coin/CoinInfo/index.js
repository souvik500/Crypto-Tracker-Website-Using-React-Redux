import React,{useState} from 'react'
import "./styles.css"

const CoinInfo = ({heading,desc}) => {

  const [flag,setFlag] = useState(true)
  const smallDesc= desc.slice(0,200) + "<p style='color:var(--grey); cursor:pointer;'>Read More...</p>";
  const longDesc = desc + "<p style='color:var(--grey); cursor:pointer;'>Read Less...</p>";

  return (
    <div className='coin-page-component'>
        <h2 className="coin-name-heading">{heading}</h2>
        <p  
        dangerouslySetInnerHTML={{   __html: desc.length>200 ? (flag? smallDesc : longDesc) : desc}} 
        className="coin-desc"    onClick={()=>setFlag(!flag)}></p>
    </div>
  )
}

export default CoinInfo


// dangerouslySetInnerHTML={{   __html:  desc}} 