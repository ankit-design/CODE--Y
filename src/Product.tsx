import React from 'react';
import { Link } from 'react-router-dom';

export  function Product({thumbnail,category,title,price,gender,id}) {
  return (
    <div  className='w-auto bg-orange-300'>
        <img width={380} src={thumbnail} alt='img'/>
        <div>{category}</div>
        <div>{title}</div>
        <div>${price}</div>
        <div>{gender}</div>
        <Link to={"/productDetail/"+id} className='text-md text-white'> View Detail </Link>
        

    </div>
  )
}


