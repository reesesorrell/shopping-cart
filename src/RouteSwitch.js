import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Catalog from "./components/Catalog"
import Product from "./components/Product";


const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/catalog/table-top" element={<Catalog items="table-top" />} />
        <Route path="/catalog/cards" element={<Catalog items="cards" />} />
        <Route path="/catalog/accessories" element={<Catalog items="accessories" />} />
        <Route path="/products/:id" element={<Product />}/>
        <Route path="/catalog" element={<Catalog items="all" />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
