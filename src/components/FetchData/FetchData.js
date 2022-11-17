import React, { useEffect, useState } from 'react';

const CardOfShop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div>

        </div>
    );
};

export default CardOfShop;