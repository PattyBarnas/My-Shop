import React, { createContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  items: [],
  totalAmount: 0,
  quantity: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  openCart: () => {},
  closeCart: () => {},
  clearCart: () => {},
};

function reducer(state, action){
    switch (action.type){
        case 'addItem'{
            return {...state.items, items: action.payload,}
        }
    }
}

function CartProvider({ children }) {
  const [
    {
      items,
      totalAmount,
      quantity,
    
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  function addItem(item){
    dispatch(type: 'addItem')
  }
}

export default CartProvider;
