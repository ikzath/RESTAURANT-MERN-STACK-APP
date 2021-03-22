import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "../styles/Login.css";


function Login() {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const history = useHistory();

    return (
        <div className='login'>
          <Link to='/'>
          <img 
          className = 'login__logo'
          src='https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2020/1/shutterstock_321864554.jpg'      
          alt = ''
          />
    
        </Link>
          <div className='login__container'> 
            <h2>Sign In</h2>
    
            <form>
            <h5>Email</h5>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
    
            <h5>Password</h5>
            <input type='text' value={password} onChange={e => setPassword(e.target.value)} />
    
    
            <button type='submit' className='login__signInButton' >Login</button>
    
            </form>
            
            <p>
              By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
              see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
    
            <button type='submit' className='login__registerButton' >Create your Amzon account</button>
          </div>
    
        </div>
       )
}

export default Login
