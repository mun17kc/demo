import React from 'react';
import Cart from '~/components/Cart/index';
function Cartpage({ cartItems }) {
    return (
        <div>
            <Cart cartItems={cartItems} />
        </div>
    );
}

export default Cartpage;
