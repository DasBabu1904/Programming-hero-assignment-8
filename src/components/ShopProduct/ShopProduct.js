import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../ShopProduct/ShopProduct.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const ShopCart = (props) => {
    const { addToCart, product } = props;
    const { email, name, phone, picture, price, _id } = product;
    const addCartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="Cart_Area" >
            <Card style={{ width: '18rem' }}>
                <Card.Img className="Picture_Size" variant="top" src={picture} />
                <Card.Body>
                    <Card.Title ><h2>{name}</h2></Card.Title>
                    <Card.Text>
                        Details:<br />
                        Price:${price}<br />
                        Contact:{phone}<br />
                        Email:{email}<br />
                    </Card.Text>
                    <Button onClick={() => addToCart(props.product)} variant="primary" className="Button" key={_id}>Add to Cart {addCartIcon}</Button>
                </Card.Body>
            </Card>

        </div >
    );
};

export default ShopCart;

