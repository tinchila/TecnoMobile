import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addItem = (item, cant) => {
        const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].cant += cant;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, cant }]);
        }
    }
    useEffect(() => {
        console.log(cart)
    }, [cart])

    const getQuantity = () => {
        return cart.reduce((acum, unItem) => acum + unItem.cant, 0)
        
    }
    return (
        <CartContext.Provider value={{ cart, addItem, getQuantity, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider