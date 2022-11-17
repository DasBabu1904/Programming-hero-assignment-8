import React from 'react';
import "../ShopArea/ShopArea.css"
import FetchData from '../FetchData/FetchData';
import CartArea from '../CartArea/CartArea';
const ShopArea = () => {
    const CartList = [];
    function addToCart(item) {
        CartList.push(item);
        // console.log("New push", CartList)
    }
    function ShowCart(CartList) {
        console.log(CartList)
    }
    return (

        <div className="Shop_Section">

            <div className="Main_Section">Main Area <FetchData addToCart={addToCart} className="Grid_of_Card"></FetchData></div>
            <div className="Cart_Section">cart section {CartList.map(item => {
                <CartArea item={item} ShowCart={ShowCart}></CartArea>
            })
            }
            </div>
        </div>
    );
};

export default ShopArea;
