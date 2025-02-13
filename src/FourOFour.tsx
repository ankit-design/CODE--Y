import React from 'react'
import { Link } from 'react-router-dom'

export  function FourOFour() {
  return (
    <div className='flex flex-col  bg-green-500 h-full mx-auto' >
   <img className='w-2/3' src='https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg' alt='404 error' />
    <Link to="/">
    <button className='border-solid border-4 border-black'>back to home</button>
    </Link>
    </div>
  )
}
