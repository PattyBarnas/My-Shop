import { useState } from "react";
import Cart from "./features/Cart/Cart";
import Backdrop from "./ui/Backdrop";
import NavBar from "./ui/NavBar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

import { CartProvider } from "./store/CartContext";
import LoginForm from "./pages/LoginForm";
import ProductItem from "./features/Products/ProductItem";

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Navigate replace to="/" />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:prodId" element={<ProductItem />} />
          <Route path="/account/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
