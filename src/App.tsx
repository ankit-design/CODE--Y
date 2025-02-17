import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ParentComp from "./ParentComp";
import { Route, Routes } from 'react-router-dom';
import ParentComp2 from "./ParentComp2";
import { FourOFour } from "./FourOFour";
import { SearchOrSortComp } from './SearchOrSortComp';
import CartPage from './CartPage';

function App() {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState("default");
  const [cartQuantity, setCartQuantity] = useState(JSON.parse(localStorage.getItem("Cart-value") || "{}"));
  const [count, setCount] = useState(0);

  function handleQueryChange(newQueryValue) {
    setQuery(newQueryValue);
  }

  function handleSortChange(sortValue) {
    setSort(sortValue);
  }

  function reset(){
    localStorage.setItem("Cart-value",JSON.stringify({}));
    setCartQuantity({});
  }

  function handleCart(value, id) {
    const oldCount = cartQuantity[id] || 0;
    const totalCartQuantity = { ...cartQuantity, [id]: oldCount + value };
    localStorage.setItem("Cart-value", JSON.stringify(totalCartQuantity));
    setCartQuantity(totalCartQuantity);
  }

  useEffect(() => {
    setCount(Object.keys(cartQuantity).reduce((acc, curr) => acc + cartQuantity[curr], 0));
  }, [cartQuantity]);

  

  return (
    <>
      <div className="flex flex-col">
        <NavBar count={count} />
        <SearchOrSortComp handleQueryChange={handleQueryChange} handleSortChange={handleSortChange} query={query} sort={sort} />
        <div className="h-screen overflow-scroll">
          <Routes>
            <Route index element={<ParentComp query={query} sort={sort} />} />
            <Route path="/ProductList" element={<ParentComp query={query} sort={sort} />} />
            <Route path="/productDetail/:id" element={<ParentComp2 handleCart={handleCart} reset={reset} />} />
            <Route path="*" element={<FourOFour />} />
            <Route path="/cartPage" element={<CartPage cartObj={cartQuantity}/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
