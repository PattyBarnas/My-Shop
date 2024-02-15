import React, { useState } from "react";
import NavBar from "../ui/NavBar";
import { useCart } from "../store/CartContext";
import ProductList from "../features/Products/ProductList";

function HomePage() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <ProductList />
    </div>
  );
}

export default HomePage;
