import React, { useState } from 'react';
import { Data } from './Data';
import { ProductList } from './ProductList';
import SelectBar from './SelectBar';
import NodataFound from "./NodataFound";

let newData=[];


export default function ParentComp({data}) {
    const [query,setQuery]=useState ('');
    const [sort,setSort]=useState ("default");

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
      case "gender":
        newData.sort((a, b) => a.gender.localeCompare(b.gender));
        break;
      default:
        break;
    }
    
    data=newData;
  
       
  return (
    <div  className='flex flex-col  w-full mb-10'>
    <div className='flex flex-row justify-between'>
    <ProductList handleQueryChange={handleQueryChange} query={query} newData={newData} />
    <SelectBar  handleSortChange={handleSortChange} sort={sort}  />
    </div>
    {data.length<=0 && <NodataFound /> }
    </div>
  )
}
