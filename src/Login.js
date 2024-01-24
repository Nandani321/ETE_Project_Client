import React, { useState } from 'react';
import './App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    
    <div className="App">
      <div className="login-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWua9b5y0Sa4Obc0Sb-WPQiG7JUny5UvoNQw&usqp=CAU"
          className="gmail-logo"
        />
        <p className="sign-in">Sign in</p>
        <p className="to-continue">to continue to Gmail</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
          name='password'
          type='password'
          placeholder='Password'
        />
          <a href="#" className="forgot-email">Forgot email?</a>
        </form>
        <p className="private-window"> </p>
        {/* <a href="#" className='learn-more'>LearnMore.</a> */}
        <br></br>
        <p className="create-account">Create account</p>
        <button type="submit" className="next">Login</button>
        
      </div>
      <div className='pagebottom'>
        <div className='languages'>
          <select name="language" id="language">
            <option value="English(US)">English(US)</option>
            <option value="English(UK)">English(UK)</option>
            <option value="Tamil">Tamil</option>
            <option value="French">French</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Login;