import React ,{ useState,useEffect } from 'react';
import {dataProvider} from './Data';
import CartitemDisplayer from './CartitemDisplayer';
import { HiArrowCircleLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function CartPage({cartObj}) {    
  const[currentData,setdata]=useState([]);
  // let completeData=[];
  let totalprice=0;
  const productIDs = new Set();
  Object.keys(cartObj).map((id)=>{
    productIDs.add(id);
  })
   
  useEffect(()=>{
    dataProvider()
    .then((data)=>{
      setdata(data);
    })
  },[])
  
   currentData.map((item)=>{
      if (productIDs.has(item.id)){
        totalprice+=item.price;
      }
    })
  
  return (
    <div>
        <div>
        <Link to="/" >
              <HiArrowCircleLeft className='text-5xl'  />
              </Link>
               {Object.keys(cartObj).map((id)=>{
                return (
               <CartitemDisplayer data={currentData} id={id} cartObj={cartObj} />)     
                  })}
             <div>
                <div>
                    <button> Coupon Code</button>
                    <button>Apply Coupon</button>
                </div>
                <div>
                    <button>Update Cart</button>
                </div>
             </div>




        </div>
        <div>
           <h2>Cart total</h2>
           <h2>Subtotal          ${totalprice}</h2>
           <h2>Total          ${totalprice}</h2>  



        </div>
    </div>
  )
}
