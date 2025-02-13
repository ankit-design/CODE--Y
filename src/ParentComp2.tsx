import React from 'react';
import { dataProvider } from './Data';
import { useParams } from 'react-router-dom';
import { ProductDetail } from './ProductDetail';
import { useEffect,useState} from 'react';
import LoadingComp from './LoadingComp';
import NodataFound from './NodataFound';




export default function ParentComp2({handleCart}) {
  const[data,setData]=useState([]);
  const[flag,setflag]=useState(true);

  let newdata=[];


   useEffect  (()=>{
    
       const fetch = async ()=>{
            await dataProvider()
          .then((res)=>{
            setData(res);
            setflag(false);
          })  
       }
       fetch();
     },[])
     


 const ID=+(useParams().id);


 if(flag){
  return <LoadingComp />
 } 

 if(data.length>=0){
  for(let i=0;i<data.length;i++){
   
    if(data[i].id==ID){
        newdata=data[i];
        break;    
    }
  }
 }

 if((newdata.length==0)&&flag){
  return <LoadingComp />
 }else if ((newdata.length==0)&&flag==false){
  return <NodataFound />
 }

  return (
    <ProductDetail  handleCart={handleCart} data={newdata} />
  )
}


    

 