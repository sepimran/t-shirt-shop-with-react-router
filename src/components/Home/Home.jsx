import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirts = useLoaderData();
    
    return (
        <div>
            <section className="heading">
                <h2>All Tshirt</h2>
            </section>
            <div className="all-tshirt-aera">
                <div className="row">
                    {
                        tShirts.map(tShirt => console.log(tShirt))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;