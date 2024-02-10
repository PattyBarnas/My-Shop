import { useState } from "react";
import Cart from "./features/Cart/Cart";
import Backdrop from "./ui/Backdrop";
import NavBar from "./ui/NavBar";

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [closeCart, setCloseCart] = useState(false);

  const closeCartHandler = () => {
    setCloseCart(!closeCart);
  };

  const openCartHandler = () => {
    setCheckout(!checkout);
  };

  return (
    <main>
      {/* <header> */}
      <NavBar onClick={openCartHandler} />
      {/* </header> */}
      {/* <button onClick={() => openCartHandler}>Check out!</button> */}

      {checkout && !closeCart && (
        <Backdrop onClick={() => setCheckout(!checkout)} />
      )}

      {checkout && !closeCart && <Cart />}
    </main>
  );
}

export default App;
