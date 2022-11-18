import "../CartElements/CartElements.css"

import React from 'react';

const CartElements = (props) => {
    const { price, name } = props.item;
    return (
        <div>
            <p ><h3 className="ElementStyle">{name}</h3> <span className="Price_text">price: ${price}</span></p>
        </div>
    );
};

export default CartElements;