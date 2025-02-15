import React,{useState} from "react";
import NavBar from "./NavBar";
import ParentComp from "./ParentComp";
import { Route,Routes } from 'react-router-dom';
import ParentComp2 from "./ParentComp2";
import { FourOFour } from "./FourOFour";
import {SearchOrSortComp} from './SearchOrSortComp'


 function App() {
      const [query,setQuery]=useState ('');
      const [sort,setSort]=useState ("default");
      const[cartQuantity,setCartQuantity]=useState({});
 
   function handleQueryChange(newQueryValue){
         setQuery(newQueryValue);
      }
  
      function handleSortChange(sortValue){
        setSort(sortValue);
     }

    function handleCart(value,id){
      console.log("value is this  :-> ",value);
      const oldCount=cartQuantity[id]||0;
      setCartQuantity({...cartQuantity,[id]:oldCount+value});
    }
    console.log(cartQuantity);
    
  
     let count = Object.keys(cartQuantity).reduce((acc,curr)=> { return acc+cartQuantity[curr]},0); 

  return (
      <>
      
          <div className="flex flex-col">
            <NavBar count={count} />
            <SearchOrSortComp handleQueryChange={handleQueryChange} handleSortChange={handleSortChange} query={query}  sort={sort} /> 
                  { <div className="h-screen overflow-scroll ">
                           <Routes>
                               <Route  index  element={<ParentComp query={query}  sort={sort} />}></Route>
                               <Route  path="/ProductList"  element={<ParentComp query={query}  sort={sort} />}></Route>
                               <Route path="/productDetail/:id" element={<ParentComp2 handleCart={handleCart}/>}></Route>
                               <Route path="*" element={<FourOFour />}></Route>
                            </Routes>
                    </div>}
      </div>  
      </>                  
  )
  
}
export default App;  
