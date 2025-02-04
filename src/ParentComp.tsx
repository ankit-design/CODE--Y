import React, { useState,useEffect } from 'react';
import { dataProvider } from './Data';
import { ProductList } from './ProductList';
import SelectBar from './SelectBar';
import NodataFound from "./NodataFound";

let newData=[];
let data;


export default function ParentComp() {
    const [query,setQuery]=useState ('');
    const [sort,setSort]=useState ("default");
    const[Data,setData]=useState([]);

    
     useEffect( ()=>{
      const fetch = async ()=>{
        const result = await dataProvider();
        setData(result);
      }
      fetch();
    },[])

    function handleQueryChange(event){
       setQuery(event.target.value);
    }

    function handleSortChange(event){
      setSort(event.target.value);
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
    <div  className='flex flex-col  w-full mb-10'>
    <div className='flex flex-row justify-between'>
    <ProductList handleQueryChange={handleQueryChange} query={query} newData={data} />
    <SelectBar  handleSortChange={handleSortChange} sort={sort}  />
    </div>
    {data.length<=0 && <NodataFound /> }
    </div>
  )
}

