import React from 'react'
import './Registration.css'

const Registration = ({ isShowSignUP },{handleLoginClick}) => {
    return (
        <div className={`${isShowSignUP ? "active" : ""} show`}>
            <div className="login-form">
                <div className="form-box solid">
                    <form>
                        <h1 className="login-text">Sign Up</h1>
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
                        <label className="signup-link">Already have an account? <span className="sign-link" onClick={handleLoginClick}>Log IN</span></label>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registration
