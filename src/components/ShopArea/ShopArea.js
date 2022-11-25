import React, { useState } from 'react';
import "../ShopArea/ShopArea.css"
import FetchData from '../FetchData/FetchData';
import CartArea from '../CartArea/CartArea';
const ShopArea = () => {
    const [CartList, setCart] = useState([])
    function addToCart(item) {
        const newCart = [...CartList, item];
        setCart(newCart)
        //console.log("New push", CartList)
    }

    const [randIN, setIN] = useState(-1)
    function ChooseOne(index) {
        setIN(index)

    }


    function ChooseAgain() {
        setCart([]);
        setIN(-1)

    }

    return (

        <div className="Shop_Section">

            <div className="Main_Section"> <FetchData addToCart={addToCart} className="Grid_of_Card"></FetchData></div>
            <CartArea CartList={CartList} ChooseOne={ChooseOne} randIN={randIN} ChooseAgain={ChooseAgain}></CartArea>
        </div>
    );
};

export default ShopArea;
