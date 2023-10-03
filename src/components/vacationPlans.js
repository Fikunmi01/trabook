import React from "react";
import './vacationPlans.css'
// import { plansData } from "./plansData";
import star from '../Images/star.png'
import navIcon from '../Images/Navigation.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";

export default function Plans() {
    return (
        <>
            <div className="vacationGeneral">

                <div className="vacationHeading">
                    
                    <div className="heading">

                        <div>
                            <h2>
                                Best 
                                <span> vacation plan</span>

                            </h2>
                            <p>Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers! </p>
                        </div>
                        
                        <>
                            <img 
                                src="/images/ElementOne.png"
                                alt="heading illustration"
                            />
                        </>

                    </div>
                    

                 
                    <div 
                        className="genVacCard">
         

                        <Swiper
                            slidesPerView={3}
                            navigation={true} modules={[Navigation]}
                            pagination={{
                            clickable: true,
                            }}
                            breakpoints={{
                            375: {
                                slidesPerView:1,
                            },
                            600: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            }}
                            className="mySwiper"      
                            >

                            <SwiperSlide>
                                <div className="vacationCard">

                                    <img 
                                        src='../Images/vacation3.png'
                                        className="vacationCardImage"
                                        alt="product"
                                    />

                                    <div className="cardDescription">

                                        <div 
                                            className="cardFlex">
                                            <p 
                                                className="boldP">
                                                    Rome, Italy
                                            </p>

                                            <p 
                                                className="lightP">
                                                $5,42k
                                            </p>
                                            
                                        </div>

                                        <div 
                                            className="cardFlex">

                                            <p 
                                                className="pTime"> 
                                                
                                                <img 
                                                    src={navIcon}  
                                                    alt="navigation icon"
                                                />

                                                10 Days Trip
                                            </p>

                                            <p className="rating">
                                                
                                                <img 
                                                    src={star}
                                                    alt="star icon"
                                                />

                                                4.8
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="vacationCard">

                                    <img 
                                        src='../Images/vacation2.png'
                                        className="vacationCardImage"
                                        alt="product"
                                    />

                                    <div className="cardDescription">

                                        <div 
                                            className="cardFlex">
                                            <p 
                                                className="boldP">
                                                    London, UK
                                            </p>

                                            <p 
                                                className="lightP">
                                                $2,42k
                                            </p>
                                            
                                        </div>

                                        <div 
                                            className="cardFlex">

                                            <p 
                                                className="pTime"> 
                                                
                                                <img 
                                                    src={navIcon}  
                                                    alt="navigation icon"
                                                />

                                                07 Days Trip
                                            </p>

                                            <p className="rating">
                                                
                                                <img 
                                                    src={star}
                                                    alt="star icon"
                                                />

                                                4.7
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="vacationCard">

                                    <img 
                                        src='../Images/vacation3.png'
                                        className="vacationCardImage"
                                        alt="product"
                                    />

                                    <div className="cardDescription">

                                        <div 
                                            className="cardFlex">
                                            <p 
                                                className="boldP">
                                                    Osaka, Japan
                                            </p>

                                            <p 
                                                className="lightP">
                                                $5,42k
                                            </p>
                                            
                                        </div>

                                        <div 
                                            className="cardFlex">

                                            <p 
                                                className="pTime"> 
                                                
                                                <img 
                                                    src={navIcon}  
                                                    alt="navigation icon"
                                                />

                                                10 Days Trip
                                            </p>

                                            <p className="rating">
                                                
                                                <img 
                                                    src={star}
                                                    alt="star icon"
                                                />

                                                4.8
                                            </p>

                                        </div>

                                    </div>

                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="vacationCard">

                                    <img 
                                        src='../Images/vacation2.png'
                                        className="vacationCardImage"
                                        alt="product"
                                    />

                                    <div className="cardDescription">

                                        <div 
                                            className="cardFlex">
                                            <p 
                                                className="boldP">
                                                    Accra, Ghana
                                            </p>

                                            <p 
                                                className="lightP">
                                                $3,42k
                                            </p>
                                            
                                        </div>

                                        <div 
                                            className="cardFlex">

                                            <p 
                                                className="pTime"> 
                                                
                                                <img 
                                                    src={navIcon}  
                                                    alt="navigation icon"
                                                />

                                                14 Days Trip
                                            </p>

                                            <p className="rating">
                                                
                                                <img 
                                                    src={star}
                                                    alt="star icon"
                                                />

                                                4.5
                                            </p>

                                        </div>

                                    </div>

                                    </div>

                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="vacationCard">

                                    <img 
                                        src='../Images/vacation3.png'
                                        className="vacationCardImage"
                                        alt="product"
                                    />

                                    <div className="cardDescription">

                                        <div 
                                            className="cardFlex">
                                            <p 
                                                className="boldP">
                                                    Paris, France
                                            </p>

                                            <p 
                                                className="lightP">
                                                $8,52k
                                            </p>
                                            
                                        </div>

                                        <div 
                                            className="cardFlex">

                                            <p 
                                                className="pTime"> 
                                                
                                                <img 
                                                    src={navIcon}  
                                                    alt="navigation icon"
                                                />

                                                10 Days Trip
                                            </p>

                                            <p className="rating">
                                                
                                                <img 
                                                    src={star}
                                                    alt="star icon"
                                                />

                                                5.0
                                            </p>

                                        </div>

                                    </div>

                                    </div>
                            </SwiperSlide>
                            
                        </Swiper>

                                                    
                       



                        

                       
                        
                    </div>
                    
                </div>

            </div>

        </>
    )
}