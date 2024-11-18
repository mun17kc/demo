import React from 'react';
import Cart from '~/components/Cart/index';
function Cartpage({ cartItems }) {
    return (
        <div>
            <h1>Giỏ Hàng</h1>
            <Cart cartItems={cartItems} />
        </div>
    );
}

export default Cartpage;
