import React from 'react'
import './Heder.css'
import ashik from '../../images/Logo.svg'
const Heder = () => {
  return (
    <nav className='header'>
      <img src={ashik} alt='' />
      <div>
        <a href='/shop'>Shop</a>
        <a href='/order'>Order</a>
        <a href='/inventory'>Inventory</a>
        <a href='about'>About</a>
      </div>
    </nav>
  )
}

export default Heder
