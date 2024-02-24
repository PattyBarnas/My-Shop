import {
  createContext,
  useReducer,
  useContext,
  useState,
  useMemo,
} from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const cartQuantity = cart.length;

  function handleAddItemToCart(item) {
    setCart((items) => [...items, item]);
  }
  function handleDeleteItemFromCart(id) {
    const updatedItems = cart.filter((item) => item._id !== id);

    setCart((items) => [...items, updatedItems]);
  }

  const value = useMemo(() => {
    return {
      cart,
      onAddItem: handleAddItemToCart,
      onRemoveItem: handleDeleteItemFromCart,
    };
  }, [handleAddItemToCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);

  if (context === undefined)
    throw new Error("CartContext was used outside of the CartProvider");

  return context;
}

export { CartProvider, useCart };
