import axios from 'axios';
import { createContext, useState } from 'react';
 export let CartContext= createContext();

 export default function CartContextProvider(props){
    let headers = {token : localStorage.getItem("userToken")}

        function addProductToCart (productId){
             return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{productId:productId,

             },{headers,},)
             .then((res)=> res)
             .catch((err) =>err);
            } 
    return <CartContext.Provider value={{addProductToCart}}>
        {props.childern}
    </CartContext.Provider> 
 }  