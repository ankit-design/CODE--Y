import React from 'react';
import { Data } from './Data';
import { useParams } from 'react-router-dom';
import { ProductDetail } from './ProductDetail';

export default function ParentComp2() {
    let data;
    data=Data[0];
   let ID=+(useParams().id);

  for(let i=0;i<Data.length;i++){
    if(Data[i].id==ID){
        data=Data[i];    
    }
  }
    

  return (
      <ProductDetail data={data} />
  )
}
