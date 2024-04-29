import React from 'react'
import { Link } from 'react-router-dom'

const CartCard = ({img,title,price,cart,setCart,id}) => {
  id++;
  return (
    <div className='cardBox'>
    <div className='cartCard'>
        <img src={img} width="100px" height="100px"/>
        <div className='cartDetails'>
            <p>{title.length>20?title.slice(0,25)+"...":title}</p>
            <p>&#8377; {price} /-</p>
        </div>
        <div className='buttons'>
       <Link to={`/myshopy/order/${title}/${price}`}><button className="cart-conform" onClick={()=>{
        const removeCart=cart.filter((item)=>{
          return item!=id;
        })
        setCart(removeCart);
       }} >Buy</button></Link>
       <Link to={`/myshopy/cart`}><button onClick={()=>{
        const removeCart=cart.filter((item)=>{
            return item!=id;
        })
        setCart(removeCart);
       }} className="cart-cancel">Remove</button></Link>
        </div>
    </div>
    </div>
  )
}

export default CartCard