import React from "react";
import Social from "../Images/Social.png"
import mailIcon from "../Images/mailIcon.png"
import './footer.css'

export default function Footer() {
    return (
        <>
            <div 
                className="footer">
                
                <div
                    className="main-footer-subscription">

                    <div
                        className="footer-subscription">

                        <h2>Subscribe and get exclusive deals & offer</h2>
                        <div className="padding-div">

                            <img 
                                className="mail-icon"
                                src= {mailIcon}
                                alt="mail-icon"
                            />

                            <input
                                type="text"
                                placeholder="Enter your mail"
                            />

                            <button>Subscribe</button>

                        </div>

                        <div
                            className="element-absolute">
                            <img 
                                src="/images/ElementOne.png"
                                alt="element-one"
                            />
                        </div>

                         
                    </div>
                 

                </div>
                  
                <div
                    className="footer-links">
                        
                    <div
                        className="links">

                        <div
                            className="about">

                            <h3>Trabook 
                                <img
                                    src="/images/logo.png"
                                    alt=""
                                />
                            </h3>

                            <p>Book your trip in minute, get full Control for much longer.</p>

                            <div
                                className="icons">
                                <img 
                                    src={Social}                                                                
                                    alt="social-icons"
                                />

                            </div>

                        </div>

                        <div
                            className="company-footer">
                            <h3>Company</h3>

                            <a
                                href="about.html">
                                About
                            </a>

                            <a 
                                href="career.html">
                                Careers
                            </a>

                            <a 
                                href="logistic.html">
                                Logistic
                            </a>
                        
                            <a 
                                href="privacy.html">
                                Privacy & Policy
                            </a>

                        </div>

                        <div
                            className="company-footer">
                            <h3>Contact</h3>

                            <a 
                                href="FAQ.html">
                                Help/FAQ
                            </a>

                            <a 
                                href="press.html">
                                Press
                            </a>
                        
                            <a 
                                href="affilates.html">
                                Affilates
                            </a>

                        </div>

                        <div
                            className="company-footer">
                            <h3>More</h3>
                        
                            <a 
                                href="press.html">
                                Press Centre
                            </a>

                            <a 
                                href="blog.html">
                                Our Blog    
                            </a>
                        
                            <a 
                                href="tips.html">
                                Low fare tips
                            </a>

                        </div>

                    </div>

                    <div
                        className="footer-legal">
                        <p>&copy; Trabook 2022. All rights reserved.</p>&nbsp;
                        <p className="pte">Terms & Conditions</p>

                    </div>
                    
                </div>

            

            </div>

        </>    
    )
}
