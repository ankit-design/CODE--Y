import React from 'react';
import { Link } from 'react-router-dom';

export default function CartitemDisplayer({data,id,cartObj}) {
    
  let newData= {};
   data.map((item)=>{
    if(item.id==id){
      newData= item;
    }
  })
  console.log("Data is :-> ",data);
  return (
    <div  className='w-auto bg-orange-300'>
          <img width={380} src={newData.thumbnail} alt='img'/>
          <h1>{newData.title}</h1>
          <div>${newData.price}</div>
          <h3>quantity is : {`->`}{cartObj[id]}</h3>
          <h2 >{newData.price*cartObj[id]}</h2>

         <Link to={"/productDetail/"+id} className='text-md text-white'>
         More info
         </Link>
    

</div>
  )
}
