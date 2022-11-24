import React, { createElement } from 'react';
import "../CartArea/CartArea.css"
import CartElements from '../CartElements/CartElements';
import RandomChoose from '../RandomChoose/RandomChoose';

const CartArea = (props) => {
    const { CartList, ShowCart, ChooseOne, randIN } = props;

    function randomElement() {
        const x = parseInt((Math.random()) * 10) % CartList.length;
        return x;
    }
    if (randIN >= 0) {
        const Chose = CartList[randIN];
        const newE = document.createElement('div');
        const parent = document.getElementById("Cart_area")
        newE.innerHTML = `
            <p >
            <h3 className="ElementStyle">${Chose.name}</h3>
             <span className="Price_text">price: ${Chose.price}</span>
             </p>
             `
        parent.innerHTML = ``
        parent.appendChild(newE);
    }
    return (
        <div className="Cart_Section" >
            <div className="Sticky">
                <h1> This is cart</h1>
                {CartList.map(item => <CartElements item={item}></CartElements>)}
                <button onClick={() => ChooseOne(randomElement())} className="Button_style">Chose For me</button>
                <div id="Cart_area">

                </div>
            </div>
        </div>
    );
};

export default CartArea;