import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Catalog from "./components/Catalog"
import Product from "./components/Product";


const RouteSwitch = () => {

  const [cart, setCart] = useState({});

  useEffect(() => {
    console.log('top remounting');
  }, [])

  const addToCart = (e) => {

    let item = e.target.id;

    let cartCopy = JSON.parse(JSON.stringify(cart));

    if (cart[item] > 0) {
      cartCopy[item] = cart[item] + 1;
    }
    else {
      cartCopy[item] = 1;
    }
    setCart(cartCopy);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/catalog/table-top" element={<Catalog items="table-top" cart={cart}/>} />
        <Route path="/catalog/cards" element={<Catalog items="cards" cart={cart}/>} />
        <Route path="/catalog/accessories" element={<Catalog items="accessories" cart={cart}/>} />
        <Route path="/products/:id" element={<Product addToCart={addToCart} cart={cart}/>}/>
        <Route path="/catalog" element={<Catalog items="all" cart={cart}/>} />
        <Route path="/" element={<Home cart={cart}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
