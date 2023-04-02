import React from 'react'
import './product.css'
import { FaShoppingCart } from 'react-icons/fa'
const Product = (props) => {
  const { name, seller, img, price, category, shipping, ratings } =
    props.product
  const { addToCart } = props
  return (
    <div className='product-container'>
      <img src={img} alt='' />
      <h6 className='product-name'>{name}</h6>
      <div className='product-info'>
        <p>Sellr : {seller}</p>
        <p>
          <small>price : ${price}</small>
        </p>
        <p>
          <small>category : {category}</small>
        </p>
        <p>
          <small>shipping : {shipping}</small>
        </p>
        <p>
          <small>ratings : {ratings}</small>
        </p>
      </div>
      <button onClick={() => addToCart(props.product)} className='button'>
        <p>AddToCart</p>
        <FaShoppingCart />
      </button>
    </div>
  )
}

export default Product
