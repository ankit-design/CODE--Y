import React from 'react'

export default function SelectBar({sort,handleSortChange}) {
  return (
    <div>

<select className='rounded border-2 border-gray-700 border-solid 'value={sort} onChange={handleSortChange}>
  <option value="default">default</option>
  <option value="price">sort by price</option>
  <option value="name">sort by name</option>
  <option value="gender">sort by gender</option>
</select>
    </div>
  )
}
