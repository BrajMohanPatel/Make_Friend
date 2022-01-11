import React,{useState} from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false) ;
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
                    <button className="btn">Sign In</button>
                    <button className="btn">Sign Up</button>
                </div>
            </nav> 
            <section className='Home'>
                <p>Welcome to</p>
                <h1> Make-Friends</h1>
            </section>
        </>
    )
}

export default Navbar
