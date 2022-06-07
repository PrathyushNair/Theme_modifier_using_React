import React,{createContext} from "react"

export const CartContext=createContext()

export const CartProvider=({children})=>{
    let [count,setCount]=React.useState(100)
    return <CartContext.Provider value={{count,setCount}}>{children}</CartContext.Provider>
}