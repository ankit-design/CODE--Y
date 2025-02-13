import React, { useState,useEffect } from 'react';
import { dataProvider } from './Data';
import { ProductList } from './ProductList';
import NodataFound from "./NodataFound";
import LoadingComp from './LoadingComp';

let newData=[];
let data=[];


export default function ParentComp({sort,query}) {
    
    const[Data,setData]=useState([]);
     const[flag,setFlag]=useState(true);
    
    
     useEffect( ()=>{
     
      const fetch = async ()=>{
          await dataProvider()
        .then((res)=>{
          setData(res);
          setFlag(false);
        })
      }
      fetch();
    },[])

   

   
   if(flag){
    return <LoadingComp />
   }
  
    newData=Data.filter((item)=>{
      return item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()); 
  })
  switch (sort) {
    case "default":
              break;
    case "price":
      newData.sort((a, b) => a.price - b.price);
      break;
    case "name":
      newData.sort((a, b) => a.category.localeCompare(b.category));
      break;
    default:
      break;
  }
  
  data=newData;
 
 
    
  
       
  return (
    
    <div>
    <ProductList newData={data} />
    {data.length<=0 && <NodataFound /> }
    </div>
  )
}

