import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import "./productspage.css";
import addcarticon from "../images/addcart.png";


const Itemcard = (props) => {
    const {addItem} = useCart();

    let product = "/products/product-details-1";
    if (props.id === 2) {
        product = "/products/product-details-2";
    }else if (props.id ===3) {
        product = "./products/product-details-3"
    }else if (props.id ===4) {
        product = "./products/product-details-4"
    }else if (props.id ===5) {
        product = "./products/product-details-5"
    }else if (props.id ===6) {
        product = "./products/product-details-6"
    }
    
    
    
    return(
            
                            
            <div className="col-md-4">
                <div className="col card col-md-4 zoom prod" style={ {width: '18rem' }}>
                    <img src={props.img} class="card-img-top" alt={props.title} />
                    <div className="card-body text-center item-bg">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.info}</p>
                        <p className="card-text">{props.desc}</p>
                        <h5>$ {props.price}</h5>
                        <Link to={product}>
                        <a href="#" className="btn btn-primary details-btn">See Details</a>
                        </Link>
                        
                        <button className="add-btn" 
                        onClick={() =>addItem(props.item)}  
                        > <img src={addcarticon} alt="add to cart icon"></img> Cart</button>
                    </div>
                </div>
            </div>
        
            
    );
};

export default Itemcard;