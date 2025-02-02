import React, { useEffect, useState } from 'react';

export function ProductDetail({data}) {
  const[value,setValue]=useState(0);
 

  function handleChange(){
    setValue(value+1);
  }

  function handleInputChange(event){
    setValue(+(event.target.value));
  }

  useEffect(()=>{
    console.log("useEffect action !! ");
  },[])

 
  
  return (
    <div className=' w-full '>
        <img className='w-1/2 h-2/4  object-cover mt-2 ml-2' src={data.imgUrl} alt='image' />
        <h1>{data.category}</h1>
        <h2>${data.price}</h2>
        <p>{data.title}</p>
        <input placeholder="Quantity..."value={value} type='number' onChange={handleInputChange}></input>
        <button onClick={handleChange}>Add to cart</button>
    </div>
  )
}
