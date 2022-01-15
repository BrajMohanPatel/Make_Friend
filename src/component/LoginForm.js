import React from 'react';
import './Login.css';

const LoginForm = ({ isShowLogin },{handleSignUPClick}) => {

  return (
    <div className={`${isShowLogin ? "active" : ""} show`}>
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text">Log In</h1>
            <label >Username</label>
            <br></br>
            <input type="text" name="username" className="login-box" />
            <br></br>
            <label >Password</label>
            <br></br>
            <input type="password" name="password" className="login-box" />
            <br></br>
            <input type="submit" value="LOGIN" className="login-btn" />
            <br></br>
            <label className="signup-link">Don't have an account? <button className="sign-link" onClick={handleSignUPClick}>Sign up</button></label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
