import React from "react";
import "./HomeScreen.css";
import { products } from "../data";
import ProductCard from "../Components/ProductCard";

const HomeScreen = () => {
    return (
        <div className="product__wrapper">
            {products.map((product) => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    );
};

export default HomeScreen;
