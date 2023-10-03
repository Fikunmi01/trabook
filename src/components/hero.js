import React from "react";
import './hero.css'

export default function Hero() {
    return (
        <div 
            className="hero">

            <div 
                className="container">

                <div 
                    className="flexOne">
                    <h1>
                        Get started your exciting 
                        <span> Journey</span> with us.
                    </h1>

                    <p>A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place.</p>

                    <button 
                        className="outlineButton">
                        Discover Now
                    </button>

                </div>

                <div 
                    className="flexTwo">
                    <img 
                        src="/images/heroImage.png" 
                        alt="heroImage"
                    />
                </div>

            </div>

            <div
                className="book-form">
                
                <div>
                    <label 
                        htmlFor='location'>
                        
                        Location
                        <input
                            type='text'
                            className=''
                            placeholder="What place?"
                        />
                    </label>

                </div>

                <div>
                    <label 
                        htmlFor='date'>
                        
                        Date
                        <input
                            type='text'
                            className=''
                            placeholder="When you will go?"
                        />
                    </label>
                </div>

                <div>
                    <label 
                        htmlFor='guest'>
                            
                         Guest   
                        <input
                            type='text'
                            className=''
                            placeholder="Number of guest"
                        />

                    </label>
                </div>

                <div
                    className="button">
                    <button>
                        Explore Now
                    </button>
                </div>

            </div>

        </div>            
    )
}