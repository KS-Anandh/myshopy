import React, { useState } from 'react'
import { useEffect } from 'react'
import { Route,Router,BrowserRouter, Routes } from 'react-router-dom';
import Products from './Products';
import NavBar from './NavBar';
import Layout from './Layout';
import OrderPage from './OrderPage';
import MyOrders from './MyOrders';
import MyCart from './MyCart';
const App = () => {
const [data,setData]=useState([]);
const [load,setLoad]=useState(true);
const [cart,setCart]=useState([]);
const [order,setOrder]=useState([]);
const appData=()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=>{
    setData(json)})
  setTimeout(()=>{setLoad(false)},4000)}
   useEffect(()=>{
     appData();   
   },[])
  return (
    <>
    <div className='container'>
    <BrowserRouter>
    <Routes>
      <Route path="/myshopy/"element={<Layout cart={cart} order={order.length}/>}>
        <Route index path="/myshopy/" element={<Products data={data} cart={cart} setCart={setCart}load={load}/>}/>
        <Route path="/myshopy/order/:id/:price/" element={<OrderPage order={order} setOrder={setOrder}/>}/>
        <Route path="/myshopy/my_order" element={<MyOrders order={order} setOrder={setOrder}/>}/>
        <Route path="/myshopy/cart" element={<MyCart data={data} cart={cart} setCart={setCart}/>}/>
      </Route>
      </Routes>
    </BrowserRouter>

    </div>
    </>
  )
}

export default App