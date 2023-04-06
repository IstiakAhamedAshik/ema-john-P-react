import React from 'react'
import './cart.css'

const Cart = (props) => {
  const { cart, children } = props
  let total = 0
  let shippingCharge = 0
  let quantity = 0
  for (const product of cart) {
    quantity = quantity + product.quantity
    total = total + product.price * product.quantity
    shippingCharge = shippingCharge + product.shipping * product.quantity
  }
  const tax = total * 0.1
  const taxT = parseFloat(tax.toFixed(2))
  const grandTotal = total + shippingCharge + taxT
  return (
    <div className='cart'>
      <h4>Order Summary</h4>
      <h6>Selected Items : {quantity}</h6>
      <h6>Total Price : ${total}</h6>
      <h6>Total Shipping Charge : {shippingCharge}$</h6>
      <h6>Tax : ${taxT}</h6>
      <p>Grand Total : ${grandTotal.toFixed(2)}</p>
      {children}
    </div>
  )
}

export default Cart
