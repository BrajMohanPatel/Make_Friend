import React,{useState} from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar ,{vs} from './component/Navbar';
// import Registration from './component/Registration';
import LoginForm from './component/LoginForm';




function App() {
  const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  return (
    
    

    <>
    
    <Navbar handleLoginClick={handleLoginClick}/>
    {/* <Registration trigger={vs}/> */}
    <LoginForm isShowLogin={isShowLogin} />
    </>
    
    
  );
}

export default App;
