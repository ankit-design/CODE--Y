import React from 'react';
import { HiShoppingCart } from "react-icons/hi";


export default function NavBar({count}) {
  return (
    <div className=' bg-white h-16  '>
         <div className='flex flex-row justify-between max-w-6xl mx-auto my-auto '>
           <img className='h-20' src='https://www.shutterstock.com/shutterstock/photos/2270561027/display_1500/stock-vector-amazon-logo-icon-logo-sign-art-design-symbol-famous-industry-jeff-bezos-corporate-text-isolated-2270561027.jpg' alt='amazon image'/>
           <div className='flex flex-row align-middle '>
           <HiShoppingCart className='text-6xl' />
           <h1>{count}</h1>
           </div>
         </div>
       


    </div>
  )
}
