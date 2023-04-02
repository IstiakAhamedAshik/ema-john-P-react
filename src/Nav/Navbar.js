import React from 'react'
import Heder from './../components/Heders/Heder'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Heder></Heder>
      <Outlet></Outlet>
    </div>
  )
}

export default Navbar
