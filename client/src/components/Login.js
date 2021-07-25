import React, {useState, useContext} from 'react';
import loginpic from "../images/signin.png";
import { NavLink, useHistory } from 'react-router-dom';

import { UserContext } from '../App';

const Login = () => {

    const {state, dispatch} = useContext(UserContext);

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                email, password
            })
        });

        const data = res.json();

        if (res.status === 400 || !data){
            window.alert("Invalid Credentials");
        } else {
            dispatch({type:'USER', payload:true})
            window.alert("Login Successful");
            history.push("/");
        }
    
    }



    return (
        <>
            <section className="sign-in">
                <div className="container mt-5">
                    <div className="signin-content">

                        <div className="signin-image">
                            <figure>
                                <img src={loginpic} alt="Login pic" />
                            </figure>
                            <NavLink to="/signup" className="signup-image-link">Create and Account</NavLink>
                        </div>
                        
                        <div className="signin-form">
                            <h2 className="form-title">Sign in</h2>
                            <form method="POST" className="register-form" id="register-form">

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email material-icons"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your Email"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Your Password"
                                    />
                                </div>

                                

                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit" 
                                    value="Log In"
                                    onClick={loginUser}
                                    />
                                </div>

                            </form>
                        </div>
                        
                            
                    </div>
                </div>


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

            </section>

            
        </>
    );
}

export default Login;
