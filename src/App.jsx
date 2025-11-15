import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
            if (cart.length >= 8) {
            alert("카트에는 최대 8개까지만 담을 수 있습니다.");
            return;
        }


        setCart([...cart, product]);
    };

    return (
        <>
            <div className="container">
                <ProductList addToCart={addToCart} />
            </div>
            <Cart cart={cart} setCart={setCart} />
        </>
    );
};

export default App;
