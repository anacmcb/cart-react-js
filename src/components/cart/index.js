import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCartData();
    }, []);

    function setCartData() {
        const savedCartData = localStorage.getItem('cartData');
        const parsedCartData = JSON.parse(savedCartData);
        if (parsedCartData.length > 0) {
            setCart(parsedCartData);
        }
    }

    function deleteItem(item) {
        const itemIndex = cart.findIndex(cartItem => cartItem === item);
        if (itemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart.splice(itemIndex, 1);
            setCart(updatedCart);
            localStorage.setItem('cartData', JSON.stringify(updatedCart));
        }
        setCartData();
    }

    function countItems(productId) {
        return cart.filter(item => item === productId).length;
    }

    return (
        <>
            <Link to={'/'}>Products</Link>
            <div id='cart-list'>
                {cart.length > 0 ? (
                    [...new Set(cart)].map((item, index) => (
                        <div key={index}>
                            {item}
                            (Quantidade: {countItems(item)})
                            <button onClick={() => deleteItem(item)}>(x)</button>
                        </div>
                    ))
                ) : (
                    <p>O carrinho está vazio.</p>
                )}
            </div>
        </>
    );
}

export default Cart