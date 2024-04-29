import React from 'react'
import OrderCard from './OrderCard'
import { Link } from 'react-router-dom'
const MyOrders = ({order,setOrder}) => {
  return (
    <div className='myOrders'>
      {order.length==0?<center>Order Now..<Link className='link_button' to="/myshopy/cart">Jump_Into_Cart</Link></center>:""}
      {
        order.map((data,id)=>{
          return <OrderCard key={id} data={data} order={order} setOrder={setOrder}/>
        })
      }
    </div>
  )
}
export default MyOrders