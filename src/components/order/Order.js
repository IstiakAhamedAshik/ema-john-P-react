import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Cart from '../Cart/Cart'

const Order = () => {
  const { products, previousCart } = useLoaderData()
  const [cart, setCart] = useState(previousCart)
  return (
    <div>
      <div className='shop-container'>
        <div className='element-container'></div>
        <div className='cart-container'>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  )
}

export default Order
