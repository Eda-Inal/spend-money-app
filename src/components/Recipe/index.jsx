

import React from 'react';
import { useSelector } from 'react-redux';
import "./styles.css"

function Recipe() {
  const items = useSelector(state => state.products.items);

  return (
    <div className='recipe-container'>
      <h1>Your Receipt</h1>
      <div className="line">

   
     
      {items.map((item) => 
        item.click > 0 && (
        
          <div key={item.id} className='recipe-box'>
            <div className='item'>
            <div className='name'>{item.name}</div>
            <div className='click'>X{item.click}</div>
            <div  className='pricee'>{item.amount}</div>
            </div>
            
       
          </div>
         
        )
      )}
         </div>
    </div>
  );
}

export default Recipe;

