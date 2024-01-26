

import React from 'react';
import { useSelector } from 'react-redux';
import "./styles.css"

function Recipe() {
  const items = useSelector(state => state.products.items);

  return (
    <div className='recipe-container'>
      <h1>Your Receipt</h1>
      {items.map((item) => 
        item.click > 0 && (
            
          <div key={item.id} className='recipe-box'>
            <div>{item.name}</div>
            <div>X{item.click}</div>
            <div>{item.amount}</div>
         
          </div>
          
        )
      )}
    </div>
  );
}

export default Recipe;

