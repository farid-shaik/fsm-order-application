import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Itemcard from './itemcard';
import { useHistory } from "react-router-dom";
import data from './data';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./productspage.css";
import carticon from "../images/cart1.png";
import MovingText from 'react-moving-text';


const Dashboard = () => {  


    const history = useHistory();
    const [userData, setUserData] = useState({});
    
    const callProductsPage = async () => {
        try {
            const res = await fetch('/products', {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json"
                },
                credentials:"include"
            });

            const data = await res.json();
            console.log(data);
            setUserData(data);
            

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
        console.log(err);
        history.push('/login');
        }
    };



    useEffect(() => {
        callProductsPage();
    }, []);




    return (
        <>
            
            
            <MovingText
            type="rotateSlowDown"
            duration="1500ms"
            delay="1s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            <h1 className="heading">Products</h1> 
            </MovingText>
            
            
            <Link to="/products/Cart" >
                <button className="btn btn-warning cart-icon"><img src={carticon} alt="cart ion"></img> Cart</button>
            </Link>
            


            <section className="py-3 container item-container">
            
                <div className="row d-flex justify-content-center justify-content-lg-between">
                
                    {data.productData.map((item, index)=>{
                        return(
                            <Itemcard 
                            img={item.img} 
                            title={item.title} 
                            desc={item.desc} 
                            price={item.price} 
                            item={item} 
                            id={item.id}
                            key={index}
                            />
                        );
                    })}
                    
                
                </div>
            </section>


        
            {/* footer */}
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom footerbg">
            
                <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
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
                <a href="https://github.com/farid-shaik/" className="m-3" target="_blank" style={{color:"#242424"}}>
                    <i className="fab fa-github fa-2x"></i>
                </a>
                </div>
            </section>


        </>
    );
    
};
 
export default Dashboard;