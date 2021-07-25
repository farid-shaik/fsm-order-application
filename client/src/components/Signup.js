import React, {useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import signpic from "../images/register.jpg";
import "./component.css";

const Signup = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name:"", email:"", phone:"", work:"", password:"", cpassword:""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    };


    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, phone, work, password, cpassword} = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword,
            }),
        });

        await res.json();

        if (res.status === 422 || !res) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else {
            window.alert("Registration Successful");
            console.log("Registration Successful");

            history.push("/login");
        }
    };

    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i class="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off"
                                    value={user.name}
                                    onChange={handleInputs}
                                    placeholder="Your Name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email material-icons"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off" 
                                    value={user.email}
                                    onChange={handleInputs}
                                    placeholder="Your Email"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <i class="zmdi zmdi-phone-in-talk material-icons-phone"></i>
                                    </label>
                                    <input type="number" name="phone" id="phone" autoComplete="off" 
                                    value={user.phone}
                                    onChange={handleInputs}
                                    placeholder="Your Phone"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="work">
                                        <i class="zmdi zmdi-slideshow material-icons-work"></i>
                                    </label>
                                    <input type="text" name="work" id="work" autoComplete="off" 
                                    value={user.work}
                                    onChange={handleInputs}
                                    placeholder="Your Profession"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off" 
                                    value={user.password}
                                    onChange={handleInputs}
                                    placeholder="Your Password"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="cpassword" id="cpassword" autoComplete="off" 
                                    value={user.cpassword}
                                    onChange={handleInputs}
                                    placeholder="Confirm your Password"
                                    />
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" 
                                    value="register" onClick={PostData}
                                    />
                                </div>

                            </form>
                        </div>
                        
                            <div className="signup-image">
                                <figure>
                                    <img src={signpic} alt="registration pic" />
                                </figure>
                                <NavLink to="/Login" className="signup-image-link">I am already registered</NavLink>
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

export default Signup;
