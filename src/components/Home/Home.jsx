import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    const tShirts = useLoaderData();
    
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
                        {
                            tShirts.map(tShirt => console.log(tShirt))
                        }
                        {
                            tShirts.map(tShirt => 
                            <TShirt 
                                key={TShirt._id}
                                tShirt={tShirt}
                            ></TShirt>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;