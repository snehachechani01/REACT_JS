import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { SET_CART_ITEMS } from "../../context/shop-context";
import { useDispatch } from "react-redux";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateCartItems = (newCartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      dispatch({ type: SET_CART_ITEMS, payload: storedCartItems });
    }
  }, []);

  const addToCart = (itemId) => {
    const newCartItems = { ...cartItems, [itemId]: cartItems[itemId] + 1 };
    dispatch({ type: SET_CART_ITEMS, payload: newCartItems });
    updateCartItems(newCartItems);
  };

  const removeFromCart = (itemId) => {
    const newCartItems = { ...cartItems, [itemId]: cartItems[itemId] - 1 };
    dispatch({ type: SET_CART_ITEMS, payload: newCartItems });
    updateCartItems(newCartItems);
  };

  const updateCartItemCount = (newAmount, itemId) => {
    const newCartItems = { ...cartItems, [itemId]: newAmount };
    dispatch({ type: SET_CART_ITEMS, payload: newCartItems });
    updateCartItems(newCartItems);
  };

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <CartItem
                key={product.id}
                data={product}
                cartItemAmount={cartItems[product.id]}
                addToCart={() => addToCart(product.id)}
                removeFromCart={() => removeFromCart(product.id)}
                updateCartItemCount={(newAmount) => updateCartItemCount(newAmount, product.id)}
              />
            );
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/shop")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/Billing");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
