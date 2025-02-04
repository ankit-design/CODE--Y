import React from "react";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import ParentComp from "./ParentComp";
import { Route,Routes } from 'react-router-dom';
import AssignmentPage from './AssignmentPage';
import DocumentPage from './DocumentPage';
import ParentComp2 from "./ParentComp2";






 function App() {

  

  return (
    <div>
     
         <div className="flex flex-row">
     <Sidebar/>
     <Routes>
    <Route  index  element={<ParentComp />}></Route>
    <Route  path="/ProductList"  element={<ParentComp />}></Route>
    <Route path="/assignmentPage" element={<AssignmentPage />}></Route>
    <Route path="/DocumentPage" element={<DocumentPage />}></Route>
    <Route path="/productDetail/:id" element={<ParentComp2 />}></Route>
   </Routes>

       
    
    </div>  
    </div>                  
  )
  
}
export default App;  
