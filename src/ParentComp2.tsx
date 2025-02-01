import React from 'react';
import { Data } from './Data';
import { useParams } from 'react-router-dom';
import { ProductDetail } from './ProductDetail';

export default function ParentComp2() {
    let data;
   let ID=+(useParams().id);

   data=Data.filter((item)=>{
    return item.id==ID
   })
    

  return (
      <ProductDetail data={data} />
  )
}
