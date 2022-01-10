import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav class="navbar">
                
                <div className="logo">
                    <h1><span>M</span>ake-<span>F</span>riends</h1>
                </div>
                <div className="menu-link">
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
