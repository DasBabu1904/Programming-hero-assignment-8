import React from 'react';


const CartArea = (props) => {
    const { CartList, ShowCart } = props;
    ShowCart(CartList)
    console.log(props)
    return (
        <div>
            <h1>This is cart</h1>

        </div>
    );
};

export default CartArea;