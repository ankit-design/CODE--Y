import React from "react";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import ParentComp from "./ParentComp";
import { Route,Routes } from 'react-router-dom';
import AssignmentPage from './AssignmentPage';
import DocumentPage from './DocumentPage';
import ParentComp2 from "./ParentComp2";




let Data;
 function App() {

  console.log(Data);

  return (
    <div>
     
         <div className="flex flex-row">
     <Sidebar/>
     <Routes>
    <Route  index path="/ProductList" element={<ParentComp data={Data}/>}></Route>
    <Route path="/assignmentPage" element={<AssignmentPage />}></Route>
    <Route path="/DocumentPage" element={<DocumentPage />}></Route>
    <Route path="//productDetail/:id" element={<ParentComp2 />}></Route>
   </Routes>


    
    </div>  
    </div>                  
  )
  
}
export default App;  
