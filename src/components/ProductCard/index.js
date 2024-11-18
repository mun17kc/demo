// src/components/ProductCard/ProductCard.js
import React from 'react';
import './ProductCard.scss';

function ProductCard({ product, addToCart }) {
    return (
        <div className="wrapper">
            <div className="product_card">
                <img src={product.image} alt={product.name} className="product_image" />
                <div className="product_left">
                    <p className="product_name">{product.name}</p>
                    <p className="product_price">{product.price} VND</p>
                </div>
                <div className="product_right">
                    <button className="add_to_cart" onClick={() => addToCart(product)}>
                        Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
