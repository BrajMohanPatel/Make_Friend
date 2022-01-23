import React, { useState } from 'react'
import './Registration.css'

const Registration = ({ isShowSignUP },{handleLoginClick}) => {
    
    const [values, setValues] = useState({
        name:"",
        email:"",
        password:"",
        confirm_password:""

    })

    const changeValue=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setValues({...values ,[name]:value})
    }

    return (
        <div className={`${isShowSignUP ? "active" : ""} show`}>
            <div className="login-form">
                <div className="form-box solid">
                    <form>
                        <h1 className="login-text">Sign Up</h1>
                        <br></br>
                        <label >Name</label>
                        <br></br>
                        <input type="text" name="name" value={values.name} onChange={changeValue} className="login-box " />
                        <br></br>
                        
                        <label >Email</label>
                        <br></br>
                        <input type="email" name="email" value={values.email} onChange={changeValue}className="login-box" />
                        <br></br>
                        <label >Password</label>
                        <br></br>
                        <input type="password" name="password" value={values.password} onChange={changeValue} className="login-box" />
                        <br></br>
                        <label >Confirm-Password</label>
                        <br></br>
                        <input type="password" name="confirm_password" value={values.confirm_password} onChange={changeValue} className="login-box" />
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
