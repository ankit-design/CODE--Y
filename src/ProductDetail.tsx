import React, {  useState } from 'react';
import { HiArrowCircleLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';


export function ProductDetail({data}) {
  const[value,setValue]=useState(0);

 
 

  function handleChange(){
    setValue(value+1);
  }

  function handleInputChange(event){
    setValue(+(event.target.value));
  }

  

//  function handleclick(){
//    window.history.go(-1);
//  }
  
  return (
    <div className=' w-full  flex flex-row '>
      <Link to="/" >
      <HiArrowCircleLeft className='text-5xl'  />
      </Link>
      <div>
        <img className='w-1/2 h-2/4  object-cover mt-2 ml-2' src={data.thumbnail} alt='image' />
        <h1>{data.category}</h1>
        <h2>${data.price}</h2>
        <p>{data.title}</p>
        <input placeholder="Quantity..."value={value} type='number' onChange={handleInputChange} className=' border-solid border-4 mr-2'></input>
        <button onClick={handleChange} className=' border-solid border-4 ' >Add to cart</button>
        <p>{data.description}</p>
        </div>
    </div>
  )
}
