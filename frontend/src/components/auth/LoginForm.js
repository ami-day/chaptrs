import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';

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
        <Navbar/>
        <h1>Login</h1>
        <div id="login_form_container">
            <form className="login_form" onSubmit={handleSubmit} >
                <input type="text" placeholder="Email" value={ email } onChange={handleEmailChange} >
                </input>
                <input type="text" placeholder="Password" value={ password } onChange={handlePasswordChange} >
                </input>
                <button type="submit">Login</button>
                {errorMessage && <div className="login-error-message">{errorMessage}</div>}
            </form>
            <p onClick={() => navigate('/signup')}>Don't yet have an account? <i className="text-primary">Sign up here</i></p>
        </div>
    </>
    )
}

export default LoginForm; 