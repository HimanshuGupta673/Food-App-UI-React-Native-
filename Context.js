import React,{createContext,useState} from 'react'

const CartItems = createContext()

const BasketContext = ({children}) =>{
    const [cart,setCart] = useState([])
    const [additems,setAdditems] = useState(0)
    return (
        <CartItems.Provider value={{cart,setCart,additems,setAdditems}}>
            {children}
        </CartItems.Provider>
    )
}

export {CartItems,BasketContext};