import React from "react";
import NavBar from "../ui/NavBar";

function HomePage() {
  return (
    <div>
      <header>
        <NavBar onClick={true} />
      </header>
      {/* <main>
        <button onClick={() => openCartHandler}>Check out!</button> */}
      {/* {checkout && !closeCart && (
          <Backdrop onClick={() => setCheckout(!checkout)} />
        )}
        {checkout && !closeCart && <Cart />}
      </main> */}{" "}
      */}
    </div>
  );
}

export default HomePage;
