import React from 'react'

export default function SelectBar({sort,handleSortChange}) {
  return (
    <>

         <select className='rounded border-2 border-gray-700 border-solid 'value={sort} onChange={(eve)=>{handleSortChange(eve.target.value)}}>
           <option value="default">default</option>
           <option value="price">sort by price</option>
           <option value="name">sort by name</option>
           
         </select>
    </>
  )
}
