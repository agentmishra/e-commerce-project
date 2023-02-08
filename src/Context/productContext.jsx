import React, { createContext, useContext } from 'react';
import useCartReducer from '../hooks/useCartReducer';

const CartContext = createContext({});

export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {
    const { cart, addToCart, removeFromCart } = useCartReducer();
    return (
        <CartContext.Provider value={{
            cart,
            count: cart.length,
            addToCart,
            removeFromCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider