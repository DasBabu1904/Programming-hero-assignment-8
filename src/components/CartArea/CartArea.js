import React from 'react';
import "../CartArea/CartArea.css"
import CartElements from '../CartElements/CartElements';

const CartArea = (props) => {
    const { CartList, ShowCart } = props;
    console.log(CartList);
    return (
        <div className="Cart_Section">
            <div className="Sticky">
                <h1> This is cart</h1>
                {CartList.map(item => <CartElements item={item}></CartElements>)}
            </div>
        </div>
    );
};

export default CartArea;