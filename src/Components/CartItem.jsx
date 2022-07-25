import React, { useContext } from "react";
import CartContext from "../context/cart/CartContext";

import "./CartItem.css";

const CartItem = ({ item }) => {
    const { removeItem } = useContext(CartContext);
    return (
        <li className="cartItem__item">
            <img src={item.image} alt="" />
            <div>
                {item.name} - {item.price}€
            </div>
            <button
                className="cartItem__button"
                onClick={() => removeItem(item._id)}
            >
                Remove
            </button>
        </li>
    );
};

export default CartItem;
