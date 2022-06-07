import React from 'react'
import { CartContext } from '../context/cartcontext'
export const Cart = () => {
 const {count,setCount}=React.useContext(CartContext)
  return (
    <div>Cart
    <button onClick={()=>{setCount(count+1)}}>Add to Cart</button>
    </div>
  )
}
