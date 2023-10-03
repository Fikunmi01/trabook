import vectorOne from '../Images/vectorOne.png'
import './services.css'
import vectorTwo from '../Images/vectorTwo.png'
import React from "react";
import { servicesData } from "./data";

export default function Offer() {
    return (
        <div 
            className='general'>

            <div 
                className='headerFlex'>

                <div 
                    className='header'>
                    <h2>
                        Things you need 
                        <span> to do</span>
                    </h2>

                    <p>We ensure that you'll embark on a perfectly planned, safe vacation at a price you can afford.</p>

                </div>

                <div 
                    className='headerImage'>
                    <img 
                        src='/images/element.png' 
                        alt='headerImage'
                    />

                </div>

            </div>

            <div 
                className='card-container'>
                

                {servicesData.map((e,i)=> {
                    return (
                        <div 
                            key={e.id}
                            className='gen'>
                                
                            <div 
                                className="card">

                                <img 
                                    src={e.image} 
                                    className='card-firstImg'
                                    alt="vectorImage"
                                />

                                <p 
                                    className='title'>
                                        {e.title}
                                </p>

                                <p 
                                    className='description'>
                                        {e.description}
                                </p>

                                <img 
                                    alt="card background" 
                                    src={i%2===0 ? vectorOne : vectorTwo}  
                                    className={i%2===0 ? 'vectorOne' : 'vectorTwo'} 
                                />        
                                
                            </div>
                            
                        </div>
                    )
                })}
                
            </div>

        </div>
    )
}