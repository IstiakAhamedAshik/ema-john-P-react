import React, { useContext } from 'react'
import './Heder.css'
import ashik from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/UserContext'
const Heder = () => {
  const { user, logOut } = useContext(AuthContext)
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
        <NavLink to='/about'>About</NavLink>
        {user?.uid ? (
          <button className='logOut-btn' onClick={logOut}>
            Logout
          </button>
        ) : (
          <>
            {' '}
            <NavLink to='/login'>LogIn</NavLink>
            <NavLink to='/signup'>SignUp</NavLink>
          </>
        )}
      </nav>
    </div>
  )
}

export default Heder
