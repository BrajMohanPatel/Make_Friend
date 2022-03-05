import React,{useState} from 'react';
import './Login.css';

const LoginForm = ({ isShowLogin ,handleSignUPClick}) => {

  const onSignUp=(e)=>{
    e.preventDefault();
    
    handleSignUPClick();
    console.log('in login page call signup')
  }

  const [values, setValues] = useState({
                                  username:"",
                                  password:"",
                                });

  const changeValue=(e)=>{
    console.log(e.target.value)
    console.log(e.target.name)

    const name=e.target.name;
    const value=e.target.value

    setValues({...values,[name]:value})
  }
  return (
    <div className={`${isShowLogin ? "active" : ""} show`}>
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text">Log In</h1>
            <label >Username</label>
            <br></br>
            <input type="text" name="username" value={values.username} onChange={changeValue} className="login-box" />
            <br></br>
            <label >Password</label>
            <br></br>
            <input type="password" name="password" value={values.password}onChange={changeValue} className="login-box" />
            <br></br>
            <input type="submit" value="LOGIN" className="login-btn" />
            <br></br>
            <label className="signup-link">Don't have an account? <span className="sign-link" onClick={onSignUp}>Sign up</span></label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
