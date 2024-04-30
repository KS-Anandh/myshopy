import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
const OrderPage = ({order,setOrder}) => {

const {id,price,img}=useParams();
var a=parseInt(price)
const [money,setMoney]=useState(a);
const [adress,setAdress]=useState(null);
const [ph_no,setPh_no]=useState(null);
function sendToOrderPage(){
  const data={
    "item_name":id,
    "total_price":money,
    "address":adress,
    "phone_no":ph_no }
  setOrder([...order,data])}
  return (
<> 
<div className='yes'>
      <div className='OrderPage'>
        <h3><span style={{color:"red"}}>Item: </span>{id}</h3>
        <p>&#8377; {money}</p>
        <label>Number of Items:</label>
        <input className='inputBox' type="number"  placeholder=" 1" onChange={(e)=>
          setMoney(e.target.value*a)
        }/>
        <textarea className='input_area' onChange={(e)=>{
          setAdress(e.target.value)
        }} cols="30" row="2"placeholder='Enter Your Address(inculde Your Road and street)'/>
        <input className='input_text' type="text" onChange={(e)=>{
          setPh_no(e.target.value)
        }} placeholder='Your Phone Number'/>
        <div className='orderBtn'>        
        <Link to="/myshopy/my_order"><button className='conform' onClick={sendToOrderPage}>Order</button></Link>
        <Link to="/myshopy/"><button className='cancel'>cancel</button></Link>
        </div>
      </div>
</div>
</>
  )
}

export default OrderPage