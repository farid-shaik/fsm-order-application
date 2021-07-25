import React, {useEffect, useState} from 'react';

const Contact = () => {

    
    const [userData, setUserData] = useState({name:"", email:"", phone:"", message:""});

    const userContact = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            console.log(data);
            setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone });
            

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
        console.log(err);
        // history.push('/login');
        }
    };



    useEffect(() => {
        userContact();
    }, []);



    // we are storing data in states

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData({ ...userData, [name]: value })
    }


    // send data to backend

    const contactForm = async (e) => {
        e.preventDefault();

        const { name, email, phone, message } = userData;

        const res = await fetch('/contact', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name, email, phone, message
            })

        });

        const data = await res.json();

        if (!data) {
            console.log("message not sent");
        } else {
            alert("Message Sent")
            setUserData({...userData, message:""});
        }
    }




    return (
        <>
            <div className="contact_info">
                <div className="container-fluid">
                    <div className="row">
                         <div className="col-lg-10 offset-lg-1 display-flex justify-content-between">
                             {/* phone number */}
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" />
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Phone
                                    </div>
                                    <div className="contact_info_text">
                                        +91 98765 43210
                                    </div>
                                </div>
                            </div>
                            
                            {/* Email */}
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" />
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Email
                                    </div>
                                    <div className="contact_info_text">
                                        farid@gmail.com
                                    </div>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" />
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Address
                                    </div>
                                    <div className="contact_info_text">
                                        IITD, New Delhi, India
                                    </div>
                                </div>
                            </div>

                         </div>
                    </div>
                </div>
            </div>


            {/* contact us form */}

            <div className="contact_form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact_form_container py-5">
                                <div className="contact_form_title">
                                    Get in Touch
                                </div>
                                <form method="POST" id="contact_form">
                                    <div className="contact_form_name d-flex justify-content-between align-items-between">
                                        <input type="text" id="contact_form_name" 
                                        className="contact_form_name input_field"
                                        name="name"
                                        value={userData.name} 
                                        onChange={handleInputs}
                                        placeholder="Your Name" required="true"
                                        />

                                        <input type="email" id="contact_form_email" 
                                        className="contact_form_email input_field" 
                                        name="email"
                                        value={userData.email}
                                        onChange={handleInputs}
                                        placeholder="Your Email" required="true"
                                        />

                                        <input type="number" id="contact_form_phone" 
                                        className="contact_form_phone input_field" 
                                        name="phone"
                                        value={userData.phone}
                                        onChange={handleInputs}
                                        placeholder="Your Phone Number" required="true"
                                        />
                                    </div>

                                    <div className="contact_form_text mt-5">
                                        <textarea className="text_field contact_form_message"
                                        name="message"
                                        value= {userData.message}
                                        onChange={handleInputs}
                                        placeholder="Message" cols="30" rows="10">
                                        </textarea>
                                    </div>

                                    <div className="contact_form_button">
                                        <button type="submit" className="button contact_submit_button"
                                        onClick={contactForm}>Send Message</button>
                                    </div>

                                </form>
                            </div>
                        </div>
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

        </>
    );
}

export default Contact;
