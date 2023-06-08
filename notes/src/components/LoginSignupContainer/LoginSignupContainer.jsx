import React, { useRef } from 'react';
import { useState } from 'react';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import "./LoginSignupContainer.css";

const LoginSignupContainer = () => {

    // defining state to make sure if login or signup is clicked
    const [login, setLogin] = useState(true);

    const loginSignupContainerRef = useRef(null);

    const handleClick = () => {
        setLogin(!login);

        
        loginSignupContainerRef.current.classList.toggle("active");

    }
    
    return (
        <div className='login-signup-container' ref={loginSignupContainerRef}>
       <Login/>
       <div className='side-div'>
        <button type='button' onClick={handleClick}> 
        {" "}
        {login ? "Signup" : "Login"} </button>
</div> 
       <Signup/>
    </div>
    );
};

export default LoginSignupContainer;