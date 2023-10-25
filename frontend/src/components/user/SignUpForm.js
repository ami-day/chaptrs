import React, { useState } from 'react';
import { link } from "react-router-dom";
// TODO: why underlined - what does this do? 
import eye_opened from '../../images/View.svg';
import eye_closed from '../../images/View_hide.svg';
import userPic from '../../images/User.svg';
import lock from '../../images/lock-03.svg';
import email_icon from '../../images/email.svg';
import globe from '../../images/globe.svg';
import calendar from '../../images/calendar.svg';
import person from '../../images/person.svg';
import './signupform.css';
import Navbar from '../navbar/Navbar';
import './signupform.css'
// import '../../styles/container/container.css';


const SignUpForm = ({ navigate }) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [date_joined, setDate_Joined] = useState("");
  const [profile_picture, setProfile_Picture] = useState("");
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetch( '/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username, email: email, password: password, location: location, date_joined: date_joined, profile_picture: profile_picture })
    })
      .then(response => {
        if(response.status === 201) {
          navigate('/login')
        } else {
          setErrors(errors)
          return response.json()
        }
      }).then((data) => {
        let errorMessage = data.message; 
        setErrors({ ...errors, signUp: errorMessage });
      })
  }  

  const handleUsernameChange = (event) => {
    const newUsername = event.target.value; 
    const usernameErrors = validateUsername(newUsername);
    setErrors({ ...errors, username: usernameErrors});
    setUsername(newUsername);
  }

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    const emailErrors = validateEmail(newEmail);
    setErrors({ ...errors, email: emailErrors});
    setEmail(newEmail);
  }

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    const passwordErrors = validatePassword(newPassword);
    setErrors({ ...errors, password: passwordErrors });
    setPassword(newPassword);
  }

  const handleLocationChange = (event) => {
    const newLocation = event.target.value;
    const locationErrors = validateLocation(newLocation);
    setErrors({ ...errors, location: locationErrors });
    setLocation(newLocation);
  }

  const handleDate_JoinedChange = (event) => {
    const newDate_Joined = event.target.value;
    const date_joinedErrors = validateDate_Joined(newDate_Joined);
    setErrors({ ...errors, date_joined: date_joinedErrors });
    setDate_Joined(newDate_Joined);
  }

  const handleProfile_PictureChange = (event) => {
    const newProfile_Picture = event.target.value;
    const profile_pictureErrors = validateProfile_Picture(newProfile_Picture);
    setErrors({ ...errors, profile_picture: profile_pictureErrors });
    setProfile_Picture(newProfile_Picture);
  }

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  const validateUsername = (username) => {
    const errors = [];
    if (username.length < 2) {
      errors.push('Username must have at least 2 characters')
    }
    return errors
  }

  const validateEmail = (email) => {
    const errors = [];
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      errors.push('Please enter a valid email address e.g. example@email.com');
    }
    if (email.trim() === '') {
      errors.length = 0;
    }
    return errors;
  };

  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters; ');
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('1 uppercase letter; ');
    }
    if (!/[!@#$%^&*]/.test(password)) {
      errors.push('1 special character; ');
    }
    if (!/\d/.test(password)) {
      errors.push('1 number; ');
    }
    return errors;
  }

  // After MVP make this more robust by importing location data from API
  const validateLocation = (location) => {
    const errors = [];
    if (location.length < 2) {
      errors.push('UPDTE VALIDATION HERE')
    }
    return errors
  }
  // After MVP make this more robust by changing string type to Date Object in back-end - drop down form to select date? Or auto fill with today's date?
  const validateDate_Joined = (date_joined) => {
    const errors = [];
    if (date_joined.length < 2) {
      errors.push('UPDTE VALIDATION HERE')
    }
    return errors
  }
  // After MVP make this more robust by filling with default user image?
  const validateProfile_Picture = (profile_picture) => {
    const errors = [];
    if (profile_picture.length < 2) {
      errors.push('UPDTE VALIDATION HERE')
    }
    return errors
  }

  const hasErrors = (email, password, errors) => {
    // Check if either email or password is empty
    const isEmpty = email.trim() === '' || password.trim() === '';
  
    // Check if there are any errors in the errors object
    const hasValidationErrors = Object.values(errors).some(
      (error) => Array.isArray(error) && error.length > 0
    );
  
    // Combine the checks using logical OR (||)
    return isEmpty || hasValidationErrors;
  };

  return (
    <>
      <body>
        <Navbar currentPage="signup" />
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="d-flex justify-content-center ml-5 p-3">Sign Up</h1>
            <div className="container pb-5  px-4 pt-3 h-100 w-50 bg-ash-green" style={{ borderRadius: '20px', maxWidth: '600px'}}>
              <div className="justify-content-beg" style={{ padding: '10px 0' }}>
                <h4 className="title">Hello, Bookworm!</h4>
                  <p className="greeting-text">Enter your personal details and start your chapter with us!
                  </p>
              </div>
            <form className="login_form" onSubmit={handleSubmit}>
              <div className ="row"> 
                <div className="col-auto">
                  <img className="form__icon" src={userPic} alt="user_icon" />
                </div>
                <div className="col">
                  <input className="form-control" placeholder="Username" id="username" type='text' value={username} onChange={handleUsernameChange} />
                </div>
              </div> {errors.username ? (
                <div className="login-error-message d-flex justify-content-center">
                  <p className="error_message">
                    {errors.username}
                  </p>
                </div>) : null}
              <div className="row">
                <div className="col-auto"> 
                  <img className="form__icon" src={email_icon} alt="email_icon" />
                </div>
                <div className="col">
                  <input className="form-control" placeholder="Email" id="email" type='text' value={email} onChange={handleEmailChange} />
                </div>
              </div> {errors.email ? (
                <div className="login-error-message d-flex justify-content-center">
                  <p className="error_message">
                    {errors.email}
                  </p>
                </div>) : null}
              <div className="row">
                  <div className="col-auto">
                    <img className="form__icon" src={lock} alt="lock-icon" />
                  </div>
                  <div className="col">
                    <input className="form-control" placeholder="Password" id="password" type={showPassword ? "text" : "password"} value={password} onChange={handlePasswordChange} />
                  </div>
                  <div className="col-auto">
                    <img alt="show-password-icon" className="button__toggle" src={showPassword ? eye_opened : eye_closed} onClick={togglePassword} />
                  </div>
              </div> {errors.password ? (
              <div className="login-error-message d-flex justify-content-center">
                  <p className="error_message">
                    {errors.password}
                  </p>
              </div>) : null}
              <div className="row">
                <div className="col-auto">
                  <img className="form__icon" src={globe} alt="globe-icon" />
                </div>
                <div className="col" style={{ padding: '10px' }}>
                  <input className="form-control" placeholder="Location" id="location" type="text" value={location} onChange={handleLocationChange} />
                </div>
              </div> {errors.location ? (
                <div className="login-error-message d-flex justify-content-center">
                  <p className="error_message">
                    {errors.location}
                  </p>
                </div>) : null}
              <div className="row">
                <div className="col-auto">
                  <img className="form__icon" src={calendar} alt="calendar-icon" />
                </div>
                <div className="col" style={{ padding: '10px' }}>
                  <input className="form-control" placeholder="Date Joined" id="date_joined" type="text" value={date_joined} onChange={handleDate_JoinedChange} />
                </div>
              </div> {errors.date_joined ? (
                <div className="login-error-message d-flex justify-content-center">
                  <p className="error_message">
                    {errors.date_joined}
                  </p>
                </div>) : null}
              <div className="row">
                <div className="col-auto">
                  <img className="form__icon" src={person} alt="person_icon" />
                </div>
                <div className="col" style={{ padding: '10px' }}>
                  <input className="form-control" placeholder="Picture URL" id="picture" type='text' value={profile_picture} onChange={handleProfile_PictureChange} />
                </div>
              </div>
              <div className="justify-content-end">
                <button className="btn bg-raisin-black custom-shadow-orange text-white" type="submit" disabled={hasErrors(email, password, errors)} id='submit'>Sign Up</button>
            <div className="error-auth__container">
              {errors.signUp ? (
                  <span className="error-auth">
                    <p className="error-auth__message">
                      {errors.signUp}
                    </p>
                  </span>) : null}
            </div>
            </div>
          </form>
          </div>
          <div className="container-panel">
            <p onClick={() => navigate('/login')}>Already have an account? <i className="text-primary">Log in here</i></p>
          </div>
        </div>
        </body>
      </>
    );
}

export default SignUpForm;
