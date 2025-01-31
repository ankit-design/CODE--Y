import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export function ProductDetail({data}) {
  const[value,setValue]=useState(" ");
  const param=useParams();
  const ID=param.id;

  let product;
  

  for(let i=0;i<data.length;i++){
      if(data[i].id==ID){
        product=data[i];
      }
  }
  

  function handleChange(){
    setValue(value+1);
  }

  function handleInputChange(event){
    setValue(+(event.target.value));
  }
  return (
    <div>
        <img src={product.imgUrl} alt='image' />
        <h1>{product.category}</h1>
        <h2>${product.price}</h2>
        <p>{product.title}</p>
        <input placeholder="Quantity..."value={value} type='number' onChange={handleInputChange}></input>
        <button onClick={handleChange}>Add to cart</button>
    </div>
  )
}
