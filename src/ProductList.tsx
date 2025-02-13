import React,{useState} from 'react';
import { Product } from './Product';
import { Link } from 'react-router-dom';



export function ProductList({newData}) {
  
  

  return (  
        
    <div className=' p-10 grid grid-cols-3 max-w-6xl mx-auto gap-4'>
        {newData.map((item)=>{
         return  <Product
          key={item.title+item.price}
          thumbnail={item.thumbnail}
          category={item.category}
          title={item.title}
          price={item.price}
          gender={item.gender}
          id={item.id}

          />
          
        })}
      

    </div>
    
  )
}


