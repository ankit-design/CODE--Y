import React from 'react';
import { Link } from 'react-router-dom';

export  function Product({imgUrl,category,title,price,gender,id}) {
  return (
    <div  className='bg-orange-500 mx-4 p-5'>
        <img width={380} src={imgUrl} alt='img'/>
        <div>{category}</div>
        <div>{title}</div>
        <div>${price}</div>
        <div>{gender}</div>
        <Link to={"/productDetail/"+id} className='text-md text-white'> View Detail </Link>
        

    </div>
  )
}
