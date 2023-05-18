import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Catalog from "./components/Catalog"

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path="/catalog/table-top" element={<Catalog items="table-top" />} />
        <Route path="/catalog/card" element={<Catalog items="card" />} />
        <Route path="/catalog/accessories" element={<Catalog items="accessories" />} />*/}
        <Route path="/catalog" element={<Catalog items="all" />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
