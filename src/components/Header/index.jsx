import React from 'react'
import "./styles.css"
import billgates from  "../../data/images/billgates.jpg"

function Header() {
  return (
    <div className='box'>
       
            <img className= "img" src={billgates} alt="Bill Gates" />
      
        
    <h1>Spend Bill Gates' Money</h1>
    </div>
  )
}

export default Header
