import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import './loginform.css';
import email_icon from '../../images/email.svg';
import lock from '../../images/lock-03.svg';

const LoginForm = ({ navigate }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        let response = await fetch("/tokens", {
            method: 'post', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password})
        })
        if(response.status !== 201) {
            setErrorMessage("Incorrect login details 😢")
            navigate('/login')
        } else {
            let data = await response.json()
            window.localStorage.setItem("token", data.token)
            navigate('/');
        }
    }

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
    }

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
    }

    return (
        <>
        <Navbar currentPage = "login"/>
        <div className="d-flex flex-column justify-content-center align-items-center vh-70  "> 
        <h1 className="d-flex justify-content-center ml-5 p-3 ">Login</h1>
        <div className="container py-5 h-100  w-50 bg-ash-green" style={{borderRadius: '20px', maxWidth: '600px'}}> 
            
            <div id="login_form_container ">
                <form className="login_form" onSubmit={handleSubmit} >
                    <div className="row" style={{ padding: '10px' }}>
                        <div className="col-auto" >
                            <img className="form__icon" src={email_icon} alt="email_icon" />
                        </div>
                        <div className="col">
                            <input type="text" placeholder="Email" className="d-inline-flex form-control" value={ email } onChange={handleEmailChange} >
                            </input>
                        </div>
                    </div>
                    <div className="row" style={{ padding: '10px' }}>
                        <div className="col-auto">
                            <img className="form__icon" src={lock} alt="lock-icon" />
                        </div>
                        <div className="col">
                            <input type="text" placeholder="Password" className=" d-inline-flex form-control" value={ password } onChange={handlePasswordChange} >
                            </input>
                        </div>
                    </div>
                    <div className="justify-content-end">
                        <button className="btn bg-raisin-black custom-shadow-orange text-white" type="submit">Login</button>
                    </div>
                    {errorMessage && <div className="login-error-message d-flex justify-content-center">{errorMessage}</div>}
                </form>
                <p className="text-muted d-flex justify-content-center" >Don't yet have an account? </p>
                <i className="text-primary d-flex justify-content-center pointer-on-hover" onClick={() => navigate('/signup')}>Sign up here</i>
                </div>
            </div>
        </div>
    </>
    )
}

export default LoginForm; 