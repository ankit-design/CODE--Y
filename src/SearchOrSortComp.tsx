import React from 'react'
import SearchBar from './SearchBar'
import SelectBar from './SelectBar'

export  function SearchOrSortComp({handleQueryChange,handleSortChange,query,sort}) {
  return (
    <div className='flex flex-row justify-between w-full mx-auto my-auto h-16 '>
         <div className='w-1/5 mx-auto my-auto'>
             <SearchBar handleQueryChange={handleQueryChange} query={query} />
         </div>
        
         <div className='w-20 mx-auto my-auto'>
           <SelectBar  handleSortChange={handleSortChange} sort={sort} />
         </div>
    </div>
  )
}
