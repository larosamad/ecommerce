// import React, { useContext, useState } from 'react';
// import Cart from "../interface/cardInterface"; 
// import { Product } from '../interface/productInterface';
// import { error } from 'console';

// interface CartContextProps { 
//     cart:  Cart[];
//     totalItems: number;
//     addToCart: (product: Product, amount:number) => void;
// }

// /*creazione del contesto cartcontext inizializzato con undefine*/
// const CartContext = React.createContext<CartContextProps|undefined>(undefined);

// //creazione del componente cart provider che gestisce lo stato del carrello
// //children solo i componenti figli che verranno avvolti nel componente cart provider 
// export const CartProvider = ( { children }: { children: React.ReactNode} ) => {
//     const [cart, setCart] = useState<Cart[]>([]); //*DEFINISCO LO STATO DEL CARRELLO

//     //*add to cart es una funzione che accetta un oggetto prodotto  una quantit* e aggiorna lo stato del carrello//*
//     const addToCart = (product: Product, amount: number) => {

//     setCart ( (prevCart) =>  {
//         const existingCartItem = prevCart.find ((item) => item.product.id === product.id );
//         let updatedCart;
//         if (existingCartItem) { 
//         updatedCart = prevCart.map((item)  =>  
//         item.product.id === product.id
//         ? { ...item, amount: item.amount + amount }
//         : item
//         );
//         } else { 
//             updatedCart = [ ...prevCart, { product, amount }];
//         }
//     return updatedCart;

//     }) ;

//     };

//     const totalItems = cart.reduce ((acc, item) => acc + item.amount, 0);
    
//     return ( 

//         <CartContext.Provider value={{ cart, totalItems, addToCart}}>
//             {children}
//         </CartContext.Provider>



//     );

// };


// export const useCart = (): CartContextProps => {
//     const context = useContext (CartContext); 
//     if (!context) { 
//     throw new Error ('useCart must be used within a CartProvider');
//     }

//     return context;
// };

import React, { useContext, useState } from 'react';
import Cart from "../interface/cardInterface"; 
import { Product } from '../interface/productInterface';

interface CartContextProps { 
    cart: Cart[];
    totalItems: number;
    addToCart: (product: Product, amount: number) => void;
    removeFromCart: (product: Product) => void;
    clearCart: () => void;
}

const CartContext = React.createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<Cart[]>([]);

    const addToCart = (product: Product, amount: number) => {
        setCart((prevCart) => {
            const existingCartItem = prevCart.find((item) => item.product.id === product.id);
            let updatedCart;
            if (existingCartItem) {
                updatedCart = prevCart.map((item) =>
                    item.product.id === product.id
                        ? { ...item, amount: item.amount + amount }
                        : item
                );
            } else {
                updatedCart = [...prevCart, { product, amount }];
            }
            return updatedCart;
        });
    };

    const removeFromCart = (product: Product) => {
        setCart((prevCart) => prevCart.filter((item) => item.product.id !== product.id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalItems = cart.reduce((acc, item) => acc + item.amount, 0);

    return (
        <CartContext.Provider value={{ cart, totalItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = (): CartContextProps => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
