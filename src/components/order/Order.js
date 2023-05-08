import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Cart from '../Cart/Cart'
import ItemrReview from '../itemreview/ItemrReview'
import './order.css'
import { removeFromdb } from '../../utilities/fakedb'

const Order = () => {
  const { previousCart } = useLoaderData()
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
            <Cart cart={cart}>
              <Link to='/shipping'>
                <button
                  style={{
                    marginLeft: '25px',
                    backgroundColor: 'green',
                    color: 'white',
                    fontSize: '10px',
                    padding: '5px 8px',
                    width: '100px',
                    border: 'none',
                    fontFamily: '-moz-initial',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                >
                  Shipping
                </button>
              </Link>
            </Cart>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order
