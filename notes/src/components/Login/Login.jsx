import React from 'react';
import "./Login.css";

const Login =() => {
    return (
    <div className='login'>
        <h1>LOGIN </h1>
        <form>
            <input type={'text'} placeholder={'Username'} />
            <input type={'password'} placeholder={'Password'} />
            <button type={'submit'}>LOGIN</button>
        </form>
    </div>
    );
};

export default Login;