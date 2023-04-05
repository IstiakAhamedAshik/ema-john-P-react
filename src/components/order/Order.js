import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Cart from '../Cart/Cart'
import ItemrReview from '../itemreview/ItemrReview'
import './order.css'
import { removeFromdb } from '../../utilities/fakedb'

const Order = () => {
  const { products, previousCart } = useLoaderData()
  const [cart, setCart] = useState(previousCart)

  const deleteItem = (id) => {
    //console.log(id)
    const getRemainProduct = cart.filter((product) => product.id !== id)
    setCart(getRemainProduct)
    removeFromdb(id)
  }
  return (
    <div>
      <div className='main-order'>
        <div className='full-orders'>
          <div className='orders-container'>
            {cart.map((product) => (
              <ItemrReview
                key={product.id}
                product={product}
                deleteItem={deleteItem}
              ></ItemrReview>
            ))}
          </div>
          <div className='order-container'>
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order
