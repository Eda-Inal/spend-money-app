import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import "./styles.css"
import { buyBtn } from '../../redux/productsSlice';

function Page() {
  const items = useSelector(state => state.products.items);
  const dispatch = useDispatch();
  const handleMath =(price) => {
dispatch((buyBtn(price)))
  }
  return (
    <div className='products-container'>
      <div className='product'>

        {
          items.map((item) => (
            <div key={item.id} className='card'>

              <img className='img' src={item.image} alt={item.name} />
              <div style={{fontSize:22,fontWeight:700}}>{item.name}</div>
              <div style={{color :"#24c486", fontSize:20,fontWeight:500}}>${item.price}</div>
              <div className='btn-card'>
                <button className='btn-sell'>Sell</button>
                <input type="text" />
                <button className='btn-buy' onClick={()=>handleMath(item.price)}>Buy</button>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Page