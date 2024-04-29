import React from 'react'
import ordered from './assets/order.png'
const OrderCard = ({data,order,setOrder}) => {
    function cancel(){
      const cancelData= order.filter((item)=>{
            return data.item_name!=item.item_name;
        })
        setOrder(cancelData)
        alert("Are yo Sure to Cancel '"+data.item_name+"'");
    }
  return (
    <div className='orderCard'>
        <img src={ordered}  />
        <div className='ordered-info'>
            <h4><span className='sub-color'>Item :</span> {data.item_name} </h4>
            <p> <span className='sub-color'>Price :</span> {data.total_price} </p>
            <p><span className='sub-color'>Address :</span> {data.address} </p>
            <p><span className='sub-color'>Phone :</span> {data.phone_no} </p>
        </div>
        <button className="cancel ordered-cancel" onClick={cancel}>Cancel</button>
    </div>
  )
}

export default OrderCard