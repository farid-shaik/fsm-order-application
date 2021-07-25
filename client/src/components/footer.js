// Not in use 

import React from 'react';
import "./component.css";

const Footer = () => {
    return (
        <>
            <footer className=" ">
                {/* <!-- Grid container --> */}
                <div className="container p-4 pb-0 footer">
                    {/* <!-- Section: Social media --> */}
                    <section className="mb-4">
                    {/* <!-- Facebook --> bg-light  footer text-center text-white */}
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundColor: "#3b5998"}}
                        href="#!"
                        role="button"
                        ><i className="fab fa-facebook-f"></i>
                        </a>

                    {/* <!-- Twitter --> */}
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundColor: "#55acee"}}
                        href="#!"
                        role="button"
                        ><i className="fab fa-twitter"></i>
                        </a>

                    {/* <!-- Google --> */}
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundColor: "#dd4b39"}}
                        href="#!"
                        role="button"
                        ><i className="fab fa-google"></i
                    ></a>

                    {/* <!-- Instagram --> */}
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundColor: "#ac2bac"}}
                        href="#!"
                        role="button"
                        ><i className="fab fa-instagram"></i
                    ></a>

                    {/* <!-- Linkedin --> */}
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundColor: "#0082ca"}}
                        href="#!"
                        role="button"
                        ><i className="fab fa-linkedin-in"></i
                    ></a>
                    {/* <!-- Github --> */}
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundColor: "#333333"}}
                        href="#!"
                        role="button"
                        ><i className="fab fa-github"></i
                    ></a>
                    </section>
                    {/* <!-- Section: Social media --> */}
                
                {/* <!-- Grid container --> */}

                {/* // <!-- Copyright --> */}
                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0.2)"}}>
                    © 2020 Copyright:
                    <a className="text-white" href="https://www.fsmskills.in/">IITD-AIA-FSM</a> 
                </div>
                {/* <!-- Copyright --> */}
                </div>
            </footer>
        </>
    );
}

export default Footer;


