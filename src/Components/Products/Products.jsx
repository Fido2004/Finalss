import React, { useEffect, useState } from 'react'
import style from "./Products.module.css"
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Categories from './../Categories/Categories';
export default function Products() {
  function getProducts(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
   }
   let {data, isError ,error,isFetching,isLoading} = useQuery({
     queryKey : ["recentProduct"],
     queryFn : getProducts ,
     staleTime: 10000,
     //refetchInterval :2000,
     //refetchIntervalInBackground :true,
     //refetchOnWindowFocus : true ,
     });
     
   /*const [products, setProducts] = useState([]);
   function getProducts(){
     axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
     .then((res)=>{
       setProducts(res.data.data);
           })
     .catch((res)=>{})
   }
   useEffect(()=>{
     getProducts();
   },[])*/
   return <>
     <div className="row">
     {  data?.data?.data.length > 0 ? data?.data?.data.map((product)=><div key={product.id} className='w-1/6'>
       <div className="product my-2 p-2 ">
       <Link to={`productdetails/${product.id}/${product.category.name}`}>
           <img src={product.imageCover} className='w-full' alt='' />
           <h3 className=' text-emerald-700'>{product.category.name}</h3>
           <h3 className=' mb-3 font-semibold'>{product.title.split(" ").slice(0,2).join(" ")}</h3>
           <div className='flex justify-between p-3 '> 
              <span >{product.price} EGP</span>
               <span><i className='fas fa-star text-yellow-400'></i>{product.ratingsAverage}</span>
           </div>
           </Link>
           <button className='btn '>Add To Cart</button>
       </div>
   </div>) : <div className="spinner"></div>}
     </div>
   </>
 }