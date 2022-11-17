import React, { useEffect, useState } from 'react';
import ShopProduct from '../ShopProduct/ShopProduct';
import "../FetchData/FetchData.css"
const CardOfShop = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    return (
        <div className="Grid_of_Card " >

            {products.map(product => <ShopProduct addToCart={props.addToCart} product={product} key={product._id}></ShopProduct>)}
        </div>
    );
};

export default CardOfShop;