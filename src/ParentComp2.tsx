import React from 'react';
import { dataProvider } from './Data';
import { useParams } from 'react-router-dom';
import { ProductDetail } from './ProductDetail';
import { useEffect,useState} from 'react';
import { Product } from './Product';



export default function ParentComp2() {
  const[data,setData]=useState([]);

  let newdata=[];


   useEffect  (  ()=>{
       const fetch = async ()=>{
         const result = await dataProvider();  
         setData(result);
       }
       fetch();
     },[])
     


 const ID=+(useParams().id);




 if(data.length>=0){
  for(let i=0;i<data.length;i++){
   
    if(data[i].id==ID){
        newdata=data[i];
        break;    
    }
  }
 }

  return (
    <ProductDetail   data={newdata} />
  )
}


    

 