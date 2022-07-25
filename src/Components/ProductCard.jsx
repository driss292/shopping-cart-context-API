import React, { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import "./ProductCard.css";
import Rating from "./Rating";

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    return (
        <div className="productCard__wrapper">
            <div>
                <img src={product.image} alt="" className="productCard__img" />
                <h4>{product.name}</h4>
                <div className="productCard__price">
                    <h5>€{product.price}</h5>
                </div>
                <div className="productCard__rateing">
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                    />
                </div>
                <button
                    className="productCard__button"
                    onClick={() => addToCart(product)}
                >
                    Add to basket
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
