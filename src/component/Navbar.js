import React,{useState} from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Registration from './Registration';


 

const Navbar = ({handleLoginClick}) => {
    const [showMenu, setShowMenu] = useState(false) ;
    const [flag, setflag] = useState(false);
    const handleClick = () => {
        handleLoginClick();
      };
   
    return (
        <>
            
            <nav class="navbar">
                <div className="hamburger"><a href="#"  onClick={()=> setShowMenu(!showMenu)}><GiHamburgerMenu color="white"  /></a></div>
                <div className="logo">
                    <pre><h1><span>M</span>ake-<span>F</span>riends</h1></pre>
                </div>
                <div className={showMenu?"mobile-menu-link":"menu-link"}>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="sign">
                    <button className="btn" onClick={handleClick}>Log In</button>
                    {/* <Link to="Registration"> */}
                    <button className="btn" onClick={()=>{setflag(true)}}>Sign Up</button>
                    {/* </Link> */}
                </div>
            </nav> 
            <section className='Home'>
                <p>Welcome to</p>
                <h1> Make-Friends</h1>
            </section>
            <Registration trigger={flag} setTrigger={setflag}/>
        </>
    )
}

export default Navbar;

