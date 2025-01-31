import React,{useState} from 'react';
import { Product } from './Product';
import { Link } from 'react-router-dom';



export function ProductList({query,handleQueryChange,newData}) {
  
  

  return (  <div className='flex flex-col'>
        <input type="text" placeholder='enter to search.....' onChange={handleQueryChange} value={query} className='rounded border-2 border-gray-300 border-solid w-80'/>
    <div className='flex flex-wrap gap-3'>
        {newData.map((item)=>{
         return  <Product
          key={item.title+item.price}
          imgUrl={item.imgUrl}
          category={item.category}
          title={item.title}
          price={item.price}
          gender={item.gender}
          id={item.id}

          />
          
        })}
      

    </div>
    </div>
  )
}


