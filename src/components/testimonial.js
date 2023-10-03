import React, { useRef } from "react";
import clientOne from '../Images/client1.png'
import clientTwo from '../Images/client2.png'
import clientThree from '../Images/client3.png'
import './testimonial.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

export default function Testimonial() {

    return (
        <>
            <div className="GeneralFlex">

                <div 
                    className="flex1">
                    <h2>What people say <span>about us</span></h2>
                    <p>
                        Our clients send us bunch of smilies with our services and we love them.
                    </p>

                </div>

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div 
                            className="flex2">
                            <img 
                                src={clientOne}
                                className='ww'
                                alt=""
                            />

                            <img 
                                src="/images/ElementTwo.png"
                                alt=""
                                className="element"
                            />
                        </div>

                    </SwiperSlide>  

                    <SwiperSlide>
                        <div 
                            className="flex2">
                            <img 
                                src={clientTwo}
                                className='ww'
                                alt=""
                            />

                            <img 
                                src="/images/ElementTwo.png"
                                alt=""
                                className="element"
                            />
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div 
                            className="flex2">
                            <img 
                                src={clientThree}
                                className='ww'
                                alt=""
                            />

                            <img 
                                src="/images/ElementTwo.png"
                                alt=""
                                className="element"
                            />
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>
            
        </>
    )
}