import React, { useState } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar, { vs } from './component/Navbar';
// import Registration from './component/Registration';
import LoginForm from './component/LoginForm';
import Registration from './component/Registration';
import {RemoveScrollBar} from 'react-remove-scroll-bar';




function App() {
  const [isShowLogin, setIsShowLogin] = useState(true);
  const [isShowSignUP, setIsShowSignUP] = useState(true);
  const handleLoginClick = () => {
    if (!isShowSignUP) {
      setIsShowSignUP((isShowSignUP) => !isShowSignUP);
    }
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };



  const handleSignUPClick = () => {
    
    if (!isShowLogin) {
      setIsShowLogin((isShowLogin) => !isShowLogin);
    }
    setIsShowSignUP((isShowSignUP) => !isShowSignUP);
    

  }

  return (



    <>
       <RemoveScrollBar/>
      <Navbar handleLoginClick={handleLoginClick} handleSignUPClick={handleSignUPClick} />
      {/* <Registration trigger={vs}/> */}
      <Registration isShowSignUP={isShowSignUP} handleLoginClick={handleLoginClick} />
      <LoginForm isShowLogin={isShowLogin} handleSignUPClick={handleSignUPClick}/>
     


    </>


  );
}

export default App;
