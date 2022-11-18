import React from 'react';
import "../CartArea/CartArea.css"

const CartArea = (props) => {
    const { CartList, ShowCart } = props;
    // ShowCart(CartList)
    // console.log(props)
    return (
        <div className="Cart_Section">
            <h1> This is cart  {CartList.length}</h1>
            {/* <div className="Cart_Section">cart section {CartList.length} </div> */}
        </div>
    );
};

export default CartArea;