import React from 'react'
import { Link } from 'react-router-dom'
const Product = ({img,title,price,cart,setCart,id}) => {
  price=price+150;
  return (
    <div className='product'>
        <img src={img} width="100%" height="200px"/>
        <div className='details'>
            <p>{title}</p>
            <p>&#8377; {price} /-</p>
        </div>
        <div className='button'>
       <Link to={`/myshopy/order/${title}/${price}` }><button>Buy</button></Link>
        <button onClick={()=>{
            alert('"'+title+'"'+" "+"added Successfully")
            setCart([...cart,id])
            console.log(cart)
        }}>cart</button>
        </div>
    </div>
  )
}

export default Product