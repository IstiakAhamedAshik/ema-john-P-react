import React from 'react'
import './Heder.css'
import ashik from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom'
const Heder = () => {
  return (
    <div className='header'>
      <img src={ashik} alt='' />
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to='/'
        >
          Shop
        </NavLink>
        <NavLink to='/order'>Order</NavLink>
        <NavLink to='/inventory'>Inventory</NavLink>
        <NavLink to='about'>About</NavLink>
      </nav>
    </div>
  )
}

export default Heder
