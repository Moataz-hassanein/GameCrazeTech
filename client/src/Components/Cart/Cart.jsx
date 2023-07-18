import React, { createContext, useEffect, useReducer } from "react";
import { products } from "./products";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";

export const CartContext = createContext();

const initialState = {
  item: products,
  totalItem: 0,
  totalAmount: 0,
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // to delete individual item from Cart
  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // clear the whole cart
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  // increase quantity of cart item
  const incrementQty = (id) => {
    dispatch({
      type: "INCREMENT_QUANTITY",
      payload: id,
    });
  };

  // decrease quantity of cart item
  const decrementQty = (id) => {
    dispatch({
      type: "DECREMENT_QUANTITY",
      payload: id,
    });
  };

  // use useEffect to immediately reflect update in quantity of cart item or amount
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.item]);

  return (
    <CartContext.Provider
      value={{ ...state, removeItem, clearCart, incrementQty, decrementQty }}
    >
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;
