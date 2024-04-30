import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({cart,order}) => {
  return (
    <div className='navBar'>
        <div className="nav-info">
             <p className="rp">Projects: https://KS-Anandh.github.io/*</p>
             <p><a href="#">Mail: Nandhaanandh1432@gmail.com</a></p>
             <p className='rp'>Ph-no:+91 9676906525</p>
        </div>
        <div className='nav-header'>
              <h2 style={{color:"red"}}><span style={{color:"blue"}}>My</span>Shopy</h2>
        </div>
        <div className='nav-list'>
            <ul>
            <Link to="/myshopy/"><li id="home">Home</li></Link> 
            <Link to="/myshopy/my_order"><li className='cart'>{order==0?"":<span className='cartIndicator'>{order}</span>}My Order's</li></Link>  
            <Link to="/myshopy/cart"><li className='cart'>{cart.length==0?"":<span className='cartIndicator'>{cart.length}</span>}My Cart</li></Link>   
            </ul>
        </div>
    </div>
  )
}

export default NavBar