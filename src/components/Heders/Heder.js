import React from 'react'
import './Heder.css'
import ashik from '../../images/Logo.svg'
import { Link } from 'react-router-dom'
const Heder = () => {
  return (
    <nav className='header'>
      <img src={ashik} alt='' />
      <div>
        <Link to='/shop'>Shop</Link>
        <Link to='/order'>Order</Link>
        <Link to='/inventory'>Inventory</Link>
        <Link to='about'>About</Link>
      </div>
    </nav>
  )
}

export default Heder
