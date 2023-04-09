import React from 'react';
import TShirt from '../TShirt/TShirt';

const Cart = ({cart ,handleRemoveFromCart}) => {

    return (
        <div className='cart-area'>
            <h3>My Cart</h3>
            <h5>Item: {cart.length}</h5>
           {
            cart.map(tShirt => <p key={tShirt._id}>{tShirt.name} <button onClick={()=> handleRemoveFromCart(tShirt._id)}>X</button></p>    )
           }
        </div>
    );
};

export default Cart;