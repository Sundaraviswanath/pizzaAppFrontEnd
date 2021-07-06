import React from 'react'
import { Link } from "react-router-dom" 
const Cart = () => {

    const handleOrderNow = () => {
        alert("Order Placed successfully");  
    }

    return (
        <div className = "container mx-auto lg:w-1/2 w-full pb-24">
       <h1 className="my-12 font-bold">Cart Items</h1>
       <ul>
            <li className = "mb-2">
                    <div className = "flex items-center justify-between">
                            <div className = " flex items-center">   
                            <img  className = "h-16" src = "/images/peproni.png" alt = "pizza"/>
                            <span className = "font-bold ml-4 w-48 ">Margherita</span>
                                </div>
                    <div>
                    <button className =" bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>
                    <b className= " px-4">
                        1
                    </b>
                    <button className =" bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button> </div>
                    <span> ₹ 500</span>
                    </div>
            </li>

            <li className = "mb-2">
                    <div className = "flex items-center justify-between">
                            <div className = " flex items-center">   
                            <img  className = "h-16" src = "/images/peproni.png" alt = "pizza"/>
                            <span className = "font-bold ml-4 w-48 ">Cheese Margherita</span>
                                </div>
                    <div>
                    <button className =" bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>
                    <b className= " px-4">
                        1
                    </b>
                    <button className =" bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button> </div>
                    <span> ₹ 600</span>
                    </div>
            </li>

            <li className = "mb-2">
                    <div className = "flex items-center justify-between">
                            <div className = " flex items-center">   
                            <img  className = "h-16" src = "/images/peproni.png" alt = "pizza"/>
                            <span className = "font-bold ml-4 w-48 ">Peppy Paneer</span>
                                </div>
                    <div>
                    <button className =" bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>
                    <b className= " px-4">
                        1
                    </b>
                    <button className =" bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button> </div>
                    <span> ₹ 450</span>
                    </div>
            </li>


            <li className = "mb-2">
                    <div className = "flex items-center justify-between">
                            <div className = " flex items-center">   
                            <img  className = "h-16" src = "/images/peproni.png" alt = "pizza"/>
                            <span className = "font-bold ml-4 w-48 ">Deluxe Veggie </span>
                                </div>
                    <div>
                    <button className =" bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>
                    <b className= " px-4">
                        1
                    </b>
                    <button className =" bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button> </div>
                    <span> ₹ 750</span>
                    </div>
            </li>

            <li className = "mb-2">
                    <div className = "flex items-center justify-between">
                            <div className = " flex items-center">   
                            <img  className = "h-16" src = "/images/peproni.png" alt = "pizza"/>
                            <span className = "font-bold ml-4 w-48 ">Veg Extravaganza  </span>
                                </div>
                    <div>
                    <button className =" bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>
                    <b className= " px-4">
                        1
                    </b>
                    <button className =" bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button> </div>
                    <span> ₹ 500</span>
                    </div>
            </li>

           
       </ul>
       <hr className="my-6"/> 
           <div className= "text-right">
              <b> Grand Total </b>: ₹ 2,800.00/-
           </div>
           <div className= "text-right mt-6">
           <Link to = "/">   
               <button onClick= {handleOrderNow} className =" bg-yellow-500 px-4 py-2 font-bold rounded-full leading-none">Order Now</button>
               </Link>
           </div>
        </div>
    )
}

export default Cart;
