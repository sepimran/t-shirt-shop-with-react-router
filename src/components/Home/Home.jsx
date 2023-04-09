import React, { useState } from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {
    const tShirts = useLoaderData();
    const [cart , setCart] = useState([]);
    
    const handleAddToCart = (tShirt) =>{
        const exit = cart.find(tshirt => tshirt._id === tShirt._id);
        if(exit){
            toast('This T-Shirt is already added in cart');
        }else{
            const newCart = [...cart ,tShirt];
            setCart(newCart)
        }
       
    }

    const handleRemoveFromCart = (id) =>{
        const remainCart = cart.filter(tShirt => tShirt._id !== id);
        setCart(remainCart)
    }
    
    return (
        <div>
            <section className="heading">
                <div className="container">
                    <h2>All Tshirt</h2>
                </div>
            </section>
            <div className="all-tshirt-aera">
                <div className="container">
                    <div className="row">
                        <div className="tshirt-col">
                            {
                                tShirts.map(tShirt => 
                                <TShirt 
                                    key={tShirt._id}
                                    tShirt={tShirt}
                                    handleAddToCart={handleAddToCart}
                                ></TShirt>)
                            }
                        </div>
                        <div className="cart-col">
                           <Cart 
                            cart={cart}
                            handleRemoveFromCart={handleRemoveFromCart}
                           >

                           </Cart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;