import React from 'react'
import "./styles.css"
import { useSelector } from 'react-redux'

function Price() {
    const price = useSelector((state) => state.products.price);
    

  return (
    <div className='price'>
     <h1>${price}</h1>
    </div>
  )
}

export default Price
