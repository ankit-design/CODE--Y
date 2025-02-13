import React from 'react';
import axios from 'axios';


   
    
 
export async function dataProvider(){
 
    try{
   return (await axios.get('https://dummyjson.com/products')).data.products;
   }catch(err){
    console.log("the err is :-> ",err);
    return [];
   }

// forTesting=await axios.get('https://dummyjson.com/products')
// .then( (res)  =>{
//     return  forTesting.data.products;
// })
// .catch((err)=>{
//     console.log("the erroe is :-> ",err);
//     return [];
// })   
}







