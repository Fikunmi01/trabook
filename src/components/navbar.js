import React from "react";
import './navbar.css'

export default function Navbar() {
    const [menu, setMenu] =React.useState(false)
    
    return (
        <div className="navbar">
            
            <nav
                className="desktop-nav">

                <h3>Trabook 
                    
                    <img 
                        src='/images/logo.png' 
                        alt="logo"
                    />
                    
                </h3>

                <ul
                    id="desktop-ul">
                    <li>Home</li>
                    <li>About</li>
                    <li>Destination</li>
                    <li>Tour</li>
                    <li>Blog</li>
                </ul>

                <div 
                    className="navButton">
                    <button 
                        className="noBorder"
                        >Login
                    </button>

                    <button 
                        className="fillButton"
                        >Sign up
                    </button>
                    
                </div>

                {menu ?
                    
                    <div>
                        <i 
                            style={{cursor:'pointer', position:'absolute',top:'1.2rem', fontSize:'3rem', right:'2rem'}}
                            onClick={()=> setMenu(false)}
                            className="uil uil-times">
                                
                        </i>
                    </div>
                    :

                    <div>
                        <i 
                            onClick={() => setMenu(true)}
                            style={{cursor:'pointer',right:'2rem'}}
                            className="uil uil-bars">

                        </i>
                    </div>


                }

                {
                    menu && ( 

                    <div
                        className="mobile-menu">

                        <ul
                            className="mobile-ul">
                            <li>Home</li>
                            <li>About</li>
                            <li>Destination</li>
                            <li>Tour</li>
                            <li>Blog</li>
                        </ul>

                        <div 
                            className="mobile-navButton">
                            <button 
                                className="noBorder"
                                >Login
                            </button>

                            <button 
                                className="fillButton"
                                >Sign up
                            </button>

                        </div>
                    </div>
                    )
                }
                
            </nav>

        </div>
    )
}