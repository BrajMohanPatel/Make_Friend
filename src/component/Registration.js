import React from 'react'
import './Registration.css'

const Registration = (props) => {
    return (props.trigger) ? (
        <>
        <div className="login-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text">Sign In</h1>
            <label>Username</label>
            <br></br>
            <input type="text" name="username" className="login-box" />
            <br></br>
            <label>Password</label>
            <br></br>
            <input type="password" name="password" className="login-box" />
            <br></br>
            <input type="submit" value="LOGIN" className="login-btn" />
          </form>
        </div>
        <button onClick={()=>{props.setTrigger(false)   }}>close</button>
      </div>
        
        </>
    ) : "";
}

export default Registration
