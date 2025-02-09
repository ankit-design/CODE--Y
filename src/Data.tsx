import React from 'react';
import axios from 'axios';


   
    
 
export async function dataProvider(){
   
await axios.get('https://dummyjson.com/products')
.then((res)=>{
    return res.data.products;
})
.catch((err)=>{
    console.log("the erroe is :-> ",err);
    return [];
})
.finally(()=>{
    console.log("API call working !!! ");
})
   
}







