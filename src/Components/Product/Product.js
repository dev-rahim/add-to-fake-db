import React from 'react';
import { addToDatabase, removeFromDatabase } from '../../utilitis/fake-db';
import './Product.css'
const Product = (props) => {
    const { name, _id, price, email } = props.product;
    const handleAddToCart = (id) => {
        // console.log(id);
        addToDatabase(id)
    }
    const removeCartItem = (id) => {
        // console.log(id);
        removeFromDatabase(id);
    }
    return (
        <div className='product-cart'>
            <div>
                <h3>{name}</h3>
                <h3>{_id}</h3>
                <h3>{email}</h3>
                <h3>{price}</h3>
            </div>
            <div className='cart-buttons'>
                <button onClick={() => handleAddToCart(_id)}>Add To Cart</button>
                <button onClick={() => removeCartItem(_id)}>Remove</button>
            </div>
        </div>
    );
};

export default Product;