import React, {useState, useEffect, Component} from 'react';
import logo from "../images/fsmlogo1.png";
import "./component.css";
import Footer from './footer';
import fsmBanner from "../images/iafsm_banner.jpg";
import SmartManufacturing from "../images/smartManufactur.png";
import MovingText from 'react-moving-text'

const Home = () => {

    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);
    

    const userHomePage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            console.log(data);
            setUserName(data.name);
            setShow(true);

        } catch (err) {
        console.log(err);
        // history.push('/login');
        }
    };



    useEffect(() => {
        userHomePage();
    }, []);



    return (
        <>

            <div className="background">

            <section className="home">
            
                <MovingText
                type=""
                duration="1500ms"
                delay="1s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <h1 className="title">ITD-AIA Foundation For Smart Manufacturing </h1><br />
                </MovingText>
                

                <MovingText
                type="flipOut"
                duration="1500ms"
                delay="1s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <div className="banner-div">
                <img className="banner" src={fsmBanner} alt="fsmBanner" />
                </div>
                </MovingText>
                
                <MovingText
                type="spin"
                duration="1500ms"
                delay="1s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <h1 className="welcome">WELCOME {"       "} {userName} </h1><br/>
                </MovingText>
                
                <h1 className="title">{ show ? 'Happy to see you back' : 'Login to visit Products'}</h1><br />
                
            </section>
            

                {/* footer */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom footer-bg">
                
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
                    <a href="https://github.com/farid-shaik/" className="m-3" target="_blank" style={{color:"#F4CBB2"}}>
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    </div>
                </section>

                </div>
            
            

        </>
    );
}

export default Home;
