import React, { useState} from 'react';
import {useCart } from 'react-use-cart';
import "./productspage.css";
import svg from "../images/svg1.png";
import {useHistory } from 'react-router-dom';
import MovingText from 'react-moving-text';
import { Link } from 'react-router-dom';


const Cart = () => {
    const history = useHistory();

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        updateItemQuantity,
        removeItem,
        emptyCart,
        cartTotal
    } = useCart();

     

    // store order details in a variable. 
    let prods = "";
    items.map((prod, index) => {
        prods = prods.concat(prod.title).concat("  -->  ").concat(prod.quantity).concat(", ")
    });


    
    

    

    // post order details and address to backend

    const [order, setOrder] = useState({
        products: "", quantity:"", name:"", phone:"", street:"", city:"", pincode:"", country:""
    });

    let name, value;

    
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setOrder({...order, [name]:value});
    };


    const PostData = async (e) => {
        e.preventDefault();

        const { products, name, phone, street, city, pincode, country} = order;

        const res = await fetch("/products/Cart", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                products, name, phone, street, city, pincode, country,
            }),
        });

        await res.json();

        if (res.status === 422 || !res) {
            window.alert("Invalid Order");
            console.log("Invalid Order");
        } else {
            window.alert("order Successful");
            console.log("order Successful");

            history.push("/products/Cart/Endpage");
        }
    };
    
    

    // onclick to scroll down

    const [visible, setVisible] = useState(true) 
        
    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
        if (scrolled > 0){ 
        setVisible(false) 
        }  
        else if (scrolled <= 0){ 
        setVisible(true) 
        } 
    }; 

    const scrollToBottom = () =>{ 
        window.scrollTo({ 
          top: document.documentElement.scrollHeight, 
          behavior: 'auto'
        }); 
      }; 
        
      window.addEventListener('scroll', toggleVisible);


    // if no item this will execute
    if (isEmpty){ 
        return <>

                <MovingText
                type="rotateSlowDown"
                duration="1500ms"
                delay="1s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <h1 className="heading">Cart</h1> 
                </MovingText>

                <p className="empty-cart">your cart is empty</p> 

                <Link to="/products/" >
                    <button className="btn btn-dark visit-products">visit Products</button>
                </Link>

                
                {/* footer */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 bottom-fix">
                    
                    <div className="me-5 d-none d-lg-block">
                    <span style={{color:"#161414"}}>Get connected with us on social networks:</span>
                    </div>

                    <div>
                    <a href="https://mdbootstrap.com/docs/standard/navigation/footer/" className="m-3" target="_blank" style={{color:"#3B5998"}}>
                        <i class="fab fa-facebook fa-2x"></i> 
                    </a>
                    <a href="https://twitter.com/iitd_aia_fsm?lang=en" className="m-3" target="_blank" style={{color:"#00ACED"}} >
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="https://www.fsmskills.in/" className="m-3" target="_blank" style={{color:"#DD4B39"}}>
                        <i className="fab fa-google fa-2x"></i>
                    </a>
                    <a href="https://instagram.com/farid_sameer" className="m-3" target="_blank" style={{color:"#BC2A8D"}}>
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/iitdaiafsm/" className="m-3" target="_blank" style={{color:"#007BB5"}}>
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="https://github.com/farid-shaik/" className="m-3" target="_blank" style={{color:"#161414"}}>
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    </div>
                </section>
            
            </>

        }
    

    else{ return(

        <>


            <MovingText
            type="rotateSlowDown"
            duration="1500ms"
            delay="1s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            <h1 className="heading">Cart</h1> 
            </MovingText>
        
            {/* getting order details to cart */}
            <section  className="py-3 container final-cart">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Cart ({totalUniqueItems}), total Items: ({totalItems})</h5>
                    <table className="table table-light table-hover m-0">
                        <tbody>
                            {items.map((item, index) =>{
                                return(
                                    <tr key={index}>
                                        <td>
                                            <img src={item.img} style={{height: '6rem'}} />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>Quantity ({item.quantity}) </td>
                                        <td>
                                            <button 
                                                className="btn btn-info ms-2"
                                                onClick={() => updateItemQuantity(item.id, item.quantity-1)}
                                            >-</button>
                                            <button 
                                                className="btn btn-info ms-2"
                                                onClick={() => updateItemQuantity(item.id, item.quantity+1)}
                                            >+</button>
                                            <button 
                                                className="btn btn-danger ms-2"
                                                onClick={() => removeItem(item.id)}
                                            >Remove Item</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <div className="col-auto ms-auto">
                    <h2>Total price: ₹ {cartTotal}</h2>
                </div>
                </div>
                <button
                    className="btn btn-danger m-2"
                    onClick={() => emptyCart()}
                >Clear Cart</button>
                
                <button className="btn btn-primary m-2  cart-btn"
                onClick={scrollToBottom}   
                >Buy Now</button>
            
            </section>



            {/* sending address to backend form */}

            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Order Details</h2>
                            <form method="POST" className="register-form" id="register-form">
                                
                                <h5 className="prods">{prods} <h10 className="copy-text">(Copy and paste below)</h10></h5>


                                <div className="form-group">
                                    <label htmlFor="products">
                                        <i class="zmdi zmdi-shopping-basket material-icons-name"></i>
                                    </label>
                                    <input type="text" name="products" id="products" autoComplete="off"
                                    onChange={handleInputs}
                                    value={order.products}
                                    placeholder="Your products"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i class="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off"
                                    value={order.name}
                                    onChange={handleInputs}
                                    placeholder="Your Name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <i class="zmdi zmdi-phone-in-talk material-icons-phone"></i>
                                    </label>
                                    <input type="number" name="phone" id="phone" autoComplete="off" 
                                    value={order.phone}
                                    onChange={handleInputs}
                                    placeholder="Your Phone"
                                    /> 
                                </div>

                                <div className="form-group">
                                    <label htmlFor="street">
                                        <i class="zmdi zmdi-home home-icons"></i>
                                    </label>
                                    <input type="text" name="street" id="street" autoComplete="off" 
                                    value={order.street}
                                    onChange={handleInputs}
                                    placeholder="Street, H.no"
                                    />
                                </div>

                                

                                <div className="form-group">
                                    <label htmlFor="city">
                                        <i class="zmdi zmdi-city material-icons-city"></i>
                                    </label>
                                    <input type="text" name="city" id="city" autoComplete="off" 
                                    value={order.city}
                                    onChange={handleInputs}
                                    placeholder="City, State"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pincode">
                                        <i class="zmdi zmdi-pin material-icons-name"></i>
                                    </label>
                                    <input type="number" name="pincode" id="pincode" autoComplete="off" 
                                    value={order.pincode}
                                    onChange={handleInputs}
                                    placeholder="Enter Pincode"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="country">
                                        <i class="zmdi zmdi-globe material-icons-name"></i>
                                    </label>
                                    <input type="text" name="country" id="country" autoComplete="off" 
                                    value={order.country}
                                    onChange={handleInputs}
                                    placeholder="Country"
                                    />
                                </div>

                                
                                <div className="form-group form-button">
                                    
                                    <input type="submit" name="order" id="order" className="form-submit" 
                                    value="order" onClick={PostData}
                                    />
                                    
                                </div>
                                

                            </form>
                        </div>
                            <div className="signup-image">
                                <figure>
                                    <img src={svg} alt="registration pic" />
                                </figure>
                                
                            </div>
                    </div>
                </div>


                {/* footer */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                
                    <div className="me-5 d-none d-lg-block">
                    <span style={{color:"#161414"}}>Get connected with us on social networks:</span>
                    </div>
                
                    <div>
                    <a href="https://mdbootstrap.com/docs/standard/navigation/footer/" className="m-3" target="_blank" style={{color:"#3B5998"}}>
                        <i class="fab fa-facebook fa-2x"></i> 
                    </a>
                    <a href="https://twitter.com/iitd_aia_fsm?lang=en" className="m-3" target="_blank" style={{color:"#00ACED"}} >
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="https://www.fsmskills.in/" className="m-3" target="_blank" style={{color:"#DD4B39"}}>
                        <i className="fab fa-google fa-2x"></i>
                    </a>
                    <a href="https://instagram.com/farid_sameer" className="m-3" target="_blank" style={{color:"#BC2A8D"}}>
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/iitdaiafsm/" className="m-3" target="_blank" style={{color:"#007BB5"}}>
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="https://github.com/farid-shaik/" className="m-3" target="_blank" style={{color:"#161414"}}>
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    </div>
                </section>
            
            </section>

            

        </>
    );
}
};

export default Cart;