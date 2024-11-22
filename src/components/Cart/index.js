// src/components/Cart/Cart.js
import React from 'react';
import './Cart.scss';
const Cart = ({ cartItems }) => {
    return (
        <div>
            <h2>Giỏ Hàng</h2>
            {cartItems.length === 0 ? (
                <p>Giỏ hàng của bạn đang trống.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index} className="cart_item">
                            <img src={item.image} alt={item.name} className="cart_image" />
                            <div className="cart_details">
                                <p className="cart_name">{item.name}</p>
                                <p className="cart_price">{item.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
