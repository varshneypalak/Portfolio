import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
const Layout = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-black via-black to-gray-800'>
      <NavBar/>
      <Outlet />
      <Footer/>
      </div>
    </>
  )
}

export default Layout