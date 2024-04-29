import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const Layout = ({cart,order}) => {
  return (
    <div>
        <NavBar cart={cart} order={order}/>
        <Outlet/>
    </div>
  )
}

export default Layout