import React, { useState } from 'react';

const Cart = ({ cart, setCart }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleCart = () => {
        setIsOpen(!isOpen);
    };

    let totalPrice = 0;
    cart.forEach((item) => {
        totalPrice += item.price;
    });

    const totalPriceFormatted = (price) => {
    let priceString = price.toString();
    let result = "";
    let count = 0;

   for (let i = priceString.length - 1; i >= 0; i--) {
            result = priceString[i] + result;
            count++;
            if (count === 3 && i !== 0) {
                result = "," + result;
                count = 0;
            }
        }

        return result;
    };

    const handlePurchase = () => {
        alert("결제가 완료되었습니다!"); 
        setCart([]); 
    };

    return (
        <div className="cart">
            <div className="cart-header">
                <h2>장바구니</h2>
                <div onClick={toggleCart}>{isOpen ? '▲' : '▼'}</div>
            </div>
            {cart.length === 0 ? (
                <p>장바구니가 비어있습니다.</p>
            ) : (
                isOpen &&
                cart.map((item, index) => (
                    <div className="cart-item" key={index}>
                        <img src={item.img} alt={item.name} />
                        <span>{item.name}</span>
                        <span>₩{item.price.toLocaleString()}</span>
                    </div>
                ))
            )}
            {totalPrice > 0 && (
                <div className="price-item">합계 금액 : {totalPriceFormatted(totalPrice) || totalPrice} 원</div>
            )}
            <button onClick={handlePurchase} disabled={cart.length === 0}>
                결제하기
            </button>
        </div>
    );
};

export default Cart;
