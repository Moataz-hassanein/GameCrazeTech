import React, { useContext } from "react";
import {Link} from "react-router-dom";
import {HiShoppingCart} from "react-icons/hi";

import { Scrollbars } from "react-custom-scrollbars-2";
import CartItems from "./CartItems";
import {FaArrowLeft} from "react-icons/fa";
import "../../Style/Cart.css";

import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  if (item.length === 0) {
    return (
      <div className="cart-body h-screen ">
        <div className="w-4/5 m-auto">
          <header className="cart-header">
            <Link to="/hardwareList" className="continue-shopping">
            <FaArrowLeft className="arrow-icon"/>
              <h3>Continue Shopping</h3>
            </Link>

            <div className="cart-icon">
              <HiShoppingCart className="text-white text-3xl  sm:text-5xl"/>
              <p>{totalItem}</p>
            </div>
          </header>

          <section className="main-cart-section">
            <h1>Shopping Cart</h1>
            <p className="total-items">Your Cart is Empty!</p>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-body">
      <div className="w-4/5 m-auto">
        <header className="cart-header">
          <Link to="/hardwareList" className="continue-shopping">
          <FaArrowLeft className="arrow-icon"/>
            <h3>Continue Shopping</h3>
          </Link>

          <div className="cart-icon">
          <HiShoppingCart className="text-white text-3xl sm:text-5xl"/>
            <p>{totalItem}</p>
          </div>
        </header>

        <section className="main-cart-section">
          <h1>Shopping Cart</h1>
          <p className="total-items">
            You have <span className="total-items-count">{totalItem}</span>{" "}
            items in your cart
          </p>

          <div className="cart-items">
            {/* Sub-component: Cart Items */}
            <div className="cart-items-container">
              {/* Individual cart item */}
              <Scrollbars>
                {item.map((curItem) => (
                  <CartItems key={curItem.id} {...curItem} />
                ))}
              </Scrollbars>
            </div>
          </div>

          <div className="card-total">
            <h3>
              Cart Total: <span>{totalAmount} €</span>
            </h3>
            <button className="checkout">Checkout</button>
            <button className="clear-cart" onClick={clearCart}>
              Clear Cart!
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContextCart;
