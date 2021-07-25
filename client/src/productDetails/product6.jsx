import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import product from "../images/stainlessScrew.jpg";
import "./product.css";

class Product6 extends Component {
    
    render() { 
        return ( 
            <>
                
                <h2 className="details-heading">FSM-DCV-32S</h2>
                <div className="container productdetails">
                
                    <div className="row">
                        
                        <div className="col-md-3">
                            <img className="item-img" src={product} alt=""></img>
                        </div>
                           
                        <div className="col-md-9">
                            <div className="container">
                                <div className="row details-subhead">
                                    <div className="col-md-6">
                                        <h6><b>Company :</b></h6>
                                        <h6><b>Title :</b></h6>
                                        <h6><b>Price :</b></h6>
                                    </div> 
                                    <div className="col-md-6">
                                        <h6>FSM</h6>
                                        <h6>Stainless Steel screws</h6>
                                        <h6>$ 2</h6>
                                    </div>
                                </div>
                            </div>
                            
                            <p>
                            FSM-DCV-53D offers major advances in valve performance for cost-effective solutions to your requirements. It offers high flow with low power consumption in a compact design. It is available in body ported or base mounted styles and can be used individually or manifold mounted. Fluid: air Operating pressure range: (internal pilot) 0.1 - 0.7MPa (external pilot) -100kPa to 0.7MPa (external pilot, pilot pressure range) 0.25 - 0.7MPa Effective area mm 2 (Cv): body ported 10.6 (0.59); base mounted 12.6 (0.7) Coil rated voltage: 3, 5, 6, 12, 24VDC;100, 110, 200, 220VAC Response time (0.5MPa) w/o indicator light;surge voltage suppressor: 32ms or less Ambient & fluid temperature: 50℃.
                            </p>                      
                        </div>
                    </div>
                </div>

                <Link to="/products">
                <button type="button" class="btn btn-secondary back-btn">{"<-- back"}</button>
                </Link>

            

                {/* footer */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom footer-bg">
                
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
                    <a href="https://github.com/farid-shaik/" className="m-3" target="_blank" style={{color:"#242424"}}>
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    </div>
                </section>





                </>
            
         );
    }
}
 
export default Product6;