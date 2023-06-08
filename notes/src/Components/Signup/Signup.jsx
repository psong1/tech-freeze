import React from 'react';
import "./Signup.css";

const Signup = () => {
    return (
        <div className='signup'>
        <h1>Sign Up </h1>
        <form>
            <input type={'text'} placeholder={'Username'} />
            <input type={'password'} placeholder={'Password'} />
            <input type={'password'} placeholder={'Confirm Password'} />
            <button type={'submit'}>Register</button>
        </form>
    </div>
    )
}

export default Signup;