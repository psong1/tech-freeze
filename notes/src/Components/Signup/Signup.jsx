import React from 'react';
import "./Signup.css";

const Signup = () => {
    return (
        <div className='signup'>
        <h1>SIGN UP </h1>
        <form>
            <input type={'text'} placeholder={'Username'} />
            <input type={'password'} placeholder={'Password'} />
            <input type={'password'} placeholder={'Confirm Password'} />
            <button type={'submit'}>REGISTER</button>
        </form>
    </div>
    )
}

export default Signup;