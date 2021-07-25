import React from 'react';
import smartmanufacturing from "../images/smartManufactur.png";
import Thankyou from "../images/Thankyou.jpg";
import "../App.css";
import { NavLink } from 'react-router-dom';

const Endpage = () => {
    return (
        <>
            <h3 className="end-title">Thank You for your order we will make sure you will get your item as soon as possible.</h3>
            <div className="Container">
                <div className="row">
                    <div className="col-md-6 thankyou">
                        
                        <img src={Thankyou} alt="thank you" />
                    </div>

                    <div className="col-md-6">
                        <img src={smartmanufacturing} alt="smart manufacturing image" /> 
                    </div>
                </div>
            </div>

            <NavLink to="/">
            <button className="btn btn-success">
            back to home
            </button>
            </NavLink>


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
                <a href="https://github.com/farid-shaik/" className="m-3" target="_blank" style={{color:"#161414"}}>
                    <i className="fab fa-github fa-2x"></i>
                </a>
                </div>
            </section>
        </>
    );
}

export default Endpage;
