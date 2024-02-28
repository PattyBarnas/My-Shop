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

  function handleUpdateCartItemQuantity(id, e) {
    const updatedCart = [...cart];

    // Find Item In Cart
    const cartItemIndex = updatedCart.findIndex(
      (item) => item.product._id === id
    );
    const existingCartItem = updatedCart[cartItemIndex];
    const userInput = e.target.value;

    console.log(existingCartItem);

    if (userInput === "increase") {
      updatedCart[cartItemIndex] = {
        ...existingCartItem,
        qty: setQuantity(++existingCartItem.qty),
      };
      console.log(existingCartItem.qty);
    } else {
      // if < 0 Delete Item From Cart
      if (existingCartItem.qty <= 1) {
        handleDeleteItemFromCart(id);
      }
      updatedCart[cartItemIndex] = {
        ...existingCartItem,
        qty: setQuantity(--existingCartItem.qty),
      };
    }
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
      onUpdateQuantity: handleUpdateCartItemQuantity,
    };
  }, [handleAddItemToCart, handleUpdateCartItemQuantity]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);

  if (context === undefined)
    throw new Error("CartContext was used outside of the CartProvider");

  return context;
}

export { CartProvider, useCart };
