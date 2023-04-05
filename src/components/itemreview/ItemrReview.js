import React from 'react'
import './item.css'
import { AiFillDelete } from 'react-icons/ai'

const ItemrReview = ({ product, deleteItem }) => {
  const { name, price, quantity, img, id } = product

  return (
    <div>
      <div className='reviewItem'>
        <div className='image'>
          <img src={img} alt='' />
        </div>
        <div className='details'>
          <p>{name}</p>
          <p>{price}</p>
          <p>{quantity}</p>
        </div>
        <div>
          <button className='del-btn' onClick={() => deleteItem(id)}>
            <AiFillDelete></AiFillDelete>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemrReview
