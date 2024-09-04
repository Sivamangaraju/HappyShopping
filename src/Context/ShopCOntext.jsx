import React ,{createContext, useState} from "react";
import all_products from '../Components/Assets/all_product'
import Product from "../Pages/Product";

export const ShopCOntext= createContext(null);

const getDefaultCart= ()=>{
    let cart={};
    for(let i=0; i<all_products.length+1; i++){
        cart[i]=0;
    }
    return cart;
}

const ShopContextProvider=(props)=>{
    const [cartItems, setcartItems] = useState(getDefaultCart());
    
    const addToCart=(ItemId)=>{
            setcartItems((prev)=>({
                ...prev, [ItemId]:prev[ItemId]+1
            }));
    }
    const removeFromCart=(ItemId)=>{
        setcartItems((prev)=>({
            ...prev, [ItemId]:prev[ItemId]-1
        }));}
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=all_products.find((Product)=>Product.id===Number(item))
                totalAmount+=itemInfo.new_price*cartItems[item];
            }
        }
        return totalAmount;
    }
    const getTotalCartItems=()=>{
        let totalItems=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItems+=cartItems[item]
            }

        }
        return totalItems;
    }

    const contextValue={getTotalCartItems,getTotalCartAmount,all_products,cartItems,addToCart,removeFromCart};
    console.log(cartItems)
    return(
        <ShopCOntext.Provider value={contextValue}> 
            {props.children}
        </ShopCOntext.Provider>
    )
}

export default ShopContextProvider;