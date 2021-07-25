// not i use

import React, {useState} from 'react';
import {useHistory } from 'react-router-dom';
import signpic from "../images/signup.svg";
import 'bootstrap/dist/css/bootstrap.css';




const Delivery = () => {

    const history = useHistory();

    
    // const {prods} = Cart();

    // console.log(props.prods);
    

    // let products = "la";
    // items.map((prod, index) => {
    //     products.concat(prod.title);

    // });
    // console.log(products);

    // console.log(totalUniqueItems);


    const [address, setAddress] = useState({
        product:"", quantity:"", name:"", phone:"3", street:"", city:"", pincode:"", country:""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setAddress({...address, [name]:value});
    };


    const PostData = async (e) => {
        e.preventDefault();

        const {product, quantity, name, phone, street, city, pincode, country} = address;

        const res = await fetch("/products/Cart/Delivery", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                product, quantity, name, phone, street, city, pincode, country,
            }),
        });

        await res.json();

        if (res.status === 422 || !res) {
            window.alert("Invalid Address");
            console.log("Invalid Address");
        } else {
            window.alert("Address Successful");
            console.log("Address Successful");

            history.push("/products/Cart/Delivery/Endpage");
        }
    };

    




    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Delivery Address</h2>
                            <form method="POST" className="register-form" id="register-form">


                            <div class="form-group mb-3">
                                <label htmlFor="name">
                                    <i class="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                
                                <input type="text" class="form-control"
                                placeholder="product"
                                name="product" id="product" autoComplete="off"
                                value={address.product}
                                onChange={handleInputs} />
                                </div>

                                <div class="form-group">
                                    <label htmlFor="name">
                                        <i class="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                
                                <input type="text" class="form-control"
                                 placeholder="Quantity" 
                                 name="quantity" id="quantity" autoComplete="off"
                                 value={address.quantity}
                                onChange={handleInputs}
                                     />
                            </div>





                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i class="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off"
                                    value={address.name}
                                    onChange={handleInputs}
                                    placeholder="Your Name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <i class="zmdi zmdi-phone-in-talk material-icons-phone"></i>
                                    </label>
                                    <input type="number" name="phone" id="phone" autoComplete="off" 
                                    value={address.phone}
                                    onChange={handleInputs}
                                    placeholder="Your Phone"
                                    /> 
                                </div>

                                <div className="form-group">
                                    <label htmlFor="street">
                                        <i class="zmdi zmdi-home home-icons"></i>
                                    </label>
                                    <input type="text" name="street" id="street" autoComplete="off" 
                                    value={address.street}
                                    onChange={handleInputs}
                                    placeholder="Street, H.no"
                                    />
                                </div>

                                

                                <div className="form-group">
                                    <label htmlFor="city">
                                        <i class="zmdi zmdi-city material-icons-city"></i>
                                    </label>
                                    <input type="text" name="city" id="city" autoComplete="off" 
                                    value={address.city}
                                    onChange={handleInputs}
                                    placeholder="City, State"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pincode">
                                        <i class="zmdi zmdi-pin material-icons-name"></i>
                                    </label>
                                    <input type="number" name="pincode" id="pincode" autoComplete="off" 
                                    value={address.pincode}
                                    onChange={handleInputs}
                                    placeholder="Enter Pincode"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="country">
                                        <i class="zmdi zmdi-globe material-icons-name"></i>
                                    </label>
                                    <input type="text" name="country" id="country" autoComplete="off" 
                                    value={address.country}
                                    onChange={handleInputs}
                                    placeholder="Country"
                                    />
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="Deliver" id="signup" className="form-submit" 
                                    value="Deliver" onClick={PostData}
                                    />
                                </div>

                            </form>
                        </div>
                        
                            <div className="signup-image">
                                <figure>
                                    <img src={signpic} alt="registration pic" />
                                </figure>
                                {/* <NavLink to="/Login" className="signup-image-link">I am already registered</NavLink> */}
                            </div>
                        
                    </div>
                </div>
            </section>
            
        </> 
    );
}

export default Delivery;
