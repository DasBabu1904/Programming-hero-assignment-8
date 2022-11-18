import React, { useState } from 'react';
import "../ShopArea/ShopArea.css"
import FetchData from '../FetchData/FetchData';
import CartArea from '../CartArea/CartArea';
const ShopArea = () => {
    const [CartList, setCart] = useState([])
    function addToCart(item) {
        const newCart = [...CartList, item];
        setCart(newCart)
        console.log("New push", CartList)
    }

    function ShowCart(CartList) {
        //console.log(CartList)
    }
    return (

        <div className="Shop_Section">

            <div className="Main_Section">Main Area <FetchData addToCart={addToCart} className="Grid_of_Card"></FetchData></div>
            <CartArea CartList={CartList}></CartArea>
        </div>
    );
};

export default ShopArea;
