import React from 'react'

export default function SearchBar({handleQueryChange,query}) {
  return (
    <>
    <input type="text" placeholder='enter to search.....' onChange={(eve)=>{handleQueryChange(eve.target.value)}} value={query} className='rounded border-4 border-gray-300 border-solid w-full'/>
    
    
    </>
  )
}
