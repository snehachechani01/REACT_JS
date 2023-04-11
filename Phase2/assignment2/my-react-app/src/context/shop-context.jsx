import { createContext, useEffect, useReducer } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const SET_CART_ITEMS = "SET_CART_ITEMS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_ITEM_COUNT = "UPDATE_CART_ITEM_COUNT";
export const CHECKOUT = "CHECKOUT";

const cartReducer = (state, action) => {
  switch (action.type) {
    case SET_CART_ITEMS:
      return action.payload;
    case ADD_TO_CART:
      return {
        ...state,
        [action.payload]: state[action.payload] + 1,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        [action.payload]:state[action.payload] - 1 ,
      };
    case UPDATE_CART_ITEM_COUNT:
      return {
        ...state,
        [action.payload.itemId]: action.payload.newAmount,
      };
    case CHECKOUT:
      return getDefaultCart();
    default:
      return state;
  }
};

export const ShopContextProvider = (props) => {
  const [cartItems, dispatch] = useReducer(cartReducer, getDefaultCart());

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      dispatch({ type: SET_CART_ITEMS, payload: JSON.parse(storedCart) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    dispatch({ type: ADD_TO_CART, payload: itemId });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: itemId });
  };

  const updateCartItemCount = (newAmount, itemId) => {
    dispatch({ type: UPDATE_CART_ITEM_COUNT, payload: { itemId, newAmount } });
  };

  const checkout = () => {
    dispatch({ type: CHECKOUT });
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
