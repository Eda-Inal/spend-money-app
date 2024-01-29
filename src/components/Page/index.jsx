import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import "./styles.css"
import { buyBtn, sellBtn, incrementByAmount } from '../../redux/productsSlice';

function Page() {
  const items = useSelector(state => state.products.items);
  const [inputValues, setInputValues] = useState({})



  const dispatch = useDispatch();

  const handleBuy = (item) => {
    dispatch(buyBtn({ id: item.id, price: item.price }));


  }
  const handleSell = (item) => {
    dispatch(sellBtn({ id: item.id, price: item.price }));

  }



  return (
    <div className='products-container'>
      <div className='product'>

        {
          items.map((item) => (
            <div key={item.id} className='card'>
              {console.log(item.click)}
              <img className='img' src={item.image} alt={item.name} />
              <div style={{ fontSize: 22, fontWeight: 700 }}>{item.name}</div>
              <div style={{ color: "#24c486", fontSize: 20, fontWeight: 500 }}>${item.price}</div>

              <div className='btn-card'>
                <button className={`btn-sell ${item.click > 0 ? "bg-sell2" : "bg-sell1"}`} onClick={() => handleSell(item)}>Sell</button>
                <input
  value={item.click > 0 ? item.click : 0}
  onChange={(e) => {
    const inputValue = e.target.value;
    const parsedValue = inputValue !== '' ? parseInt(inputValue, 10) : 0;
    dispatch(incrementByAmount({ id: item.id, amount: parsedValue, price: item.price }))
  }}
/>


                <button className='btn-buy' onClick={() => handleBuy(item)}>Buy</button>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Page