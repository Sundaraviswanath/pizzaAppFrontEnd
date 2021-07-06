import {Link,} from 'react-router-dom';
const Products = () => {

    return (
        <>
<div className = "container nx-auto pb-24">
      <h1 text-lg font-bold my-8>Pizza List</h1>
            <div className="grid grid-cols-5 my-8 gap-24">
                        <div> 
                                     <img src = "/images/peproni.png" alt = "pizza"/>
                                            <div className= "text-center">   
                                                <h2> 
                                                Margherita 
                                                </h2>
                                                <span className = "bg-gray-200 py-1 rounded-full text-sn px-4">
                                                    Small
                                                </span>

                                            </div>
                                                <div className = "flex justify-between items-center nt-4">
                                                    <span> ₹ 500</span>
                                                    <Link to = "/cart"> 
                                                    <button className = "bg-yellow-500 py-1 px-4 rounded-full font -bold">ADD</button>
                                                      </Link>
                                                </div>
                        </div>

                        <div> 
                                     <img src = "/images/peproni.png" alt = "pizza"/>
                                            <div className= "text-center">   
                                                <h2> 
                                              Cheese Margherita   
                                                </h2>
                                                <span className = "bg-gray-200 py-1 rounded-full text-sn px-4">
                                                    Small
                                                </span>

                                            </div>
                                                <div className = "flex justify-between items-center nt-4">
                                                    <span> ₹ 600</span>
                                                    <Link to = "/cart"> 
                                                    <button className = "bg-yellow-500 py-1 px-4 rounded-full font -bold">ADD</button>
                                                      </Link>
                                                </div>
                        </div>
                        <div> 
                                     <img src = "/images/peproni.png" alt = "pizza"/>
                                            <div className= "text-center">   
                                                <h2> 
                                                Peppy Paneer   
                                                </h2>
                                                <span className = "bg-gray-200 py-1 rounded-full text-sn px-4">
                                                    Small
                                                </span>

                                            </div>
                                                <div className = "flex justify-between items-center nt-4">
                                                    <span> ₹ 450</span>
                                                    <Link to = "/cart"> 
                                                    <button className = "bg-yellow-500 py-1 px-4 rounded-full font -bold">ADD</button>
                                                      </Link>
                                                </div>
                        </div>

                        <div> 
                                     <img src = "/images/peproni.png" alt = "pizza"/>
                                            <div className= "text-center">   
                                                <h2> 
                                                Deluxe Veggie  
                                                </h2>
                                                <span className = "bg-gray-200 py-1 rounded-full text-sn px-4">
                                                    Small
                                                </span>

                                            </div>
                                                <div className = "flex justify-between items-center nt-4">
                                                    <span> ₹ 750</span>
                                                    <Link to = "/cart"> 
                                                    <button className = "bg-yellow-500 py-1 px-4 rounded-full font -bold">ADD</button>
                                                      </Link>
                                                </div>
                        </div>
                    
                        <div> 
                                     <img src = "/images/peproni.png" alt = "pizza"/>
                                            <div className= "text-center">   
                                                <h2> 
                                                Veg Extravaganza  
                                                </h2>
                                                <span className = "bg-gray-200 py-1 rounded-full text-sn px-4">
                                                    Small
                                                </span>

                                            </div>
                                                <div className = "flex justify-between items-center nt-4">
                                                    <span> ₹ 500</span>
                                                    <Link to = "/cart"> 
                                                    <button className = "bg-yellow-500 py-1 px-4 rounded-full font -bold">ADD</button>
                                                      </Link>
                                                </div>
                        </div>
                        
         </div>

</div>
</>
    )
}

export default Products;
