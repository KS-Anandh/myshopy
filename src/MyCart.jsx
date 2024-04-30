import React from 'react'
import CartCard from './CartCard'
import { Link } from 'react-router-dom'

const MyCart = ({data,cart,setCart}) => {
  return (
    <div className='myCart'>
      {cart.length==0?<center className='center'>No Cart's Now..<Link className='link_button' to="/myshopy/">Jump_Into_Home</Link></center>:""}
        {
           cart.map((item,id)=>{
            item--;
            return <CartCard key={id} id={item} title={data[item].title} img={data[item].image} price={data[item].price+150} cart={cart} setCart={setCart}/>
           }) 
        }
    </div>
  )
}

export default MyCart