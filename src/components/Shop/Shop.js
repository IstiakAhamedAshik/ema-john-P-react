import React, { useEffect, useState } from 'react'
import './Shop.css'
import Product from './../Product/Product'
import Cart from '../Cart/Cart'
import { addShoppingCart, getShoppingCart } from '../../utilities/fakedb'

const Shop = () => {
  const [products, setProduct] = useState([])
  const [cart, setCart] = useState([])
  useEffect(
    () =>
      fetch('products.json')
        .then((res) => res.json())
        .then((data) => setProduct(data)),
    []
  )
  useEffect(() => {
    const storedCart = getShoppingCart()
    let newQuantity = []
    for (const id in storedCart) {
      const addingItem = products.find((product) => product.id === id)
      if (addingItem) {
        const quantity = storedCart[id]
        addingItem.quantity = quantity
        newQuantity.push(addingItem)
      }
    }
    setCart(newQuantity)
  }, [products])

  const addToCart = (Setproduct) => {
    let newCart = []
    const exit = cart.find((product) => product.id === Setproduct.id)

    if (!exit) {
      Setproduct.quantity = 1
      newCart = [...cart, Setproduct]
    } else {
      const rest = cart.filter((product) => product.id !== Setproduct.id)
      exit.quantity = exit.quantity + 1
      newCart = [...rest, exit]
    }

    setCart(newCart)
    addShoppingCart(Setproduct.id)
  }
  return (
    <div className='shop-container'>
      <div className='element-container'>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className='cart-container'>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  )
}

export default Shop
