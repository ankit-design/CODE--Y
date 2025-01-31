import React from 'react';
import { ProductList } from './ProductList';
import SectionPage from './DocumentPage';
import { Link } from 'react-router-dom';







export default function Sidebar() {
  return (
  <div className='w-1/5 h-screen bg-gray-500 flex flex-col justify-between'>
    <Link to="/ProductList" >ProductList Page</Link>
    <Link to="/assignmentPage" >Assignment page </Link>
    <Link to="/DocumentPage" >Document page </Link>
   
  </div>
  )
}
