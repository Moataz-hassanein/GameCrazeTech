import React, { useContext } from "react";
import { CartContext } from "./Cart";
import "../../Style/Cart.css";

const CartItems = ({ id, title, description, price, img, quantity }) => {
  const { removeItem, incrementQty, decrementQty } = useContext(CartContext);

  const updatedPrice = price * quantity;

  return (
    <div className="cartItemsComponent ">
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="iphone12" />
        </div>

        <div className="title">
          <h2>{title.length > 25 ? `${title.slice(0, 35)}...` : title}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
          <i className="fas fa-minus" onClick={() => decrementQty(id)}></i>
          <input type="text" placeholder={quantity} value={quantity} />
          <i className="fas fa-plus" onClick={() => incrementQty(id)}></i>
        </div>

        <div className="price">
          <h3>{updatedPrice} €</h3>
        </div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}
          ></i>
        </div>
      </div>

      <hr className="border-gray-500" />
    </div>
  );
};

export default CartItems;
