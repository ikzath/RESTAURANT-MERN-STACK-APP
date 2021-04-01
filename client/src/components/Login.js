import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "../styles/Login.css";


function Login() {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const history = useHistory();

    const onClickHandler=()=> {
      // <Link to='/'></Link>
      history.push('/');
    }

    return (
        <div className='login'>
          <img 
          className = 'login__logo'
          src='https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2020/1/shutterstock_321864554.jpg'      
          alt = ''
          />
    
          <div className='login__container'> 
            <h2>Sign In</h2>
    
            <form>
            <h5>Email</h5>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
    
            <h5>Password</h5>
            <input type='text' value={password} onChange={e => setPassword(e.target.value)} />       
            <button type='submit' onClick={onClickHandler} className='login__signInButton' >Login</button>    
            </form>
            
            <p>
              test login page, just click on login button to go to home page
            </p>
    
            <button type='submit' className='login__registerButton' >Create your Amzon account</button>
          </div>
    
        </div>
       )
}

export default Login
