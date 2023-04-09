import React from 'react';
import './TShirt.css'

const TShirt = ({tShirt}) => {
    const {name ,picture ,price} = tShirt;
    return (
        <div className='single-tShirt-item'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price: <span>${price}</span></h4>
            <button>Add To cart</button>
        </div>
    );
};

export default TShirt;