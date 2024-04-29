import React from 'react'
import Product from './Product'
import ReactLoading from 'react-loading'

const Products = ({data,load,cart,setCart}) => {
  console.log(data)
  return (
    <>
     {/* -   title,image,price,id-- */}
     <div className='loading'>{load?<ReactLoading className="spinner"color="orange"  type='bubbles'/>:""}</div>
    <div className='products'>
    {
      data.map((data,key)=>{
        return <Product cart={cart} setCart={setCart} key={key} id={data.id} img={data.image} title={data.title.length>20?data.title.slice(0,12):data.title} price={data.price}/>
      })
    }
    </div>
    </>
  )
}

export default Products