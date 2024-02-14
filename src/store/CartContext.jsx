import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
  totalAmount: 0,
  quantity: 0,
  openCart: false,
  clearCart: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "openCart":
      return {
        ...state,
        openCart: !state.openCart,
      };
    // case "closeCart":
    //   return {
    //     ...state,
    //     openCart: false,
    //   };

    // case "addItem":
    //   return {
    //     ...state.cart,
    //   };
    //   return {
    //     ...state.cart,
    //     cart: action.payload,
    //     quantity: ++state.quantity,
    //   };

    // case "clearCart":
    //   return {
    //     ...state,
    //   };

    default:
      throw new Error("something has happened?");
  }
}

function CartProvider({ children }) {
  const [{ cart, totalAmount, quantity, openCart, closeCart }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <CartContext.Provider
      value={{
        cart,
        totalAmount,
        quantity,
        openCart,

        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (context === undefined)
    throw new Error("CartContext was used outside of the CartProvider");

  return context;
}

export { CartProvider, useCart };
