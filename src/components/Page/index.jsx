import React from 'react'
import { useSelector } from 'react-redux'
function Page() {
    const items = useSelector(state => state.products.items);
    console.log(items);
  return (
    <div>
  {
    items.map((item) => (
      <div key={item.id}>
{item.name}
      </div>
    ))
  }
    </div>
  )
}

export default Page