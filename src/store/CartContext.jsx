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
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  function handleAddItemToCart(item) {
    const updatedCart = [...cart];
    const { product, qty } = item;
    const existingItemIndex = updatedCart.findIndex(
      (i) => i.product._id === item._id
    );
    const existingItem = updatedCart[existingItemIndex];

    if (existingItem) {
      updatedCart[existingItemIndex] = {
        ...existingItem,
        qty: ++existingItem.qty,
      };
      setCart(updatedCart);
    } else {
      setCart((items) => [...items, { product: item, qty: 1 }]);
    }

    console.log(cart);
  }

  function handleDeleteItemFromCart(id) {
    const updatedItems = cart.filter((item) => item.product._id !== id);
    setCart(updatedItems);
  }

  function handleUpdateItemQuantity(item) {
    // const updatedAmount;
    // if(true)
  }
  function handleCartOpen() {
    setIsOpen(!isOpen);
  }

  const value = useMemo(() => {
    return {
      cart,
      isOpen,
      onCartOpen: handleCartOpen,
      onAddItem: handleAddItemToCart,
      onRemoveItem: handleDeleteItemFromCart,
      onUpdateItem: handleUpdateItemQuantity,
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
