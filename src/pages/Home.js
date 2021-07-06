import {Link,} from 'react-router-dom';
import React, { Component } from 'react';

const Home = () => {
return (
    <>
        <div className = "hero py-16">
            <div className = "container mx-auto flex items-center justify-between">
                <div className = "w-1/2">
                    <h6 className = "text-lg"><em>Need a Pizza</em></h6>
                    <h2 className = "text-3xl md: text-6xl font -bold">Order Here....</h2>
                    <Link to = "/products"> 
                    <button className = "px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600">
                        Order Now  </button>
                    </Link>
                </div>
                <div className = "w-1/2">
                    <img  className ="w-4/5"src = "/images/pizza.png"/>
                </div>
            </div>
        </div>
        <div className="pb-24">
        
        </div>

        </>
    )
}

export default Home;