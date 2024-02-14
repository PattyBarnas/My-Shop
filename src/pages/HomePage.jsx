import React from "react";
import NavBar from "../ui/NavBar";
import { useCart } from "../store/CartContext";
import Cart from "../features/Cart/Cart";
import Backdrop from "../ui/Backdrop";

function HomePage() {
  const openCart = useCart().openCart;

  // console.log(openCart);
  return (
    <div>
      <header>
        <NavBar />
      </header>
      {openCart && <Cart />}
      {openCart && <Backdrop />}
    </div>
  );
}

export default HomePage;
