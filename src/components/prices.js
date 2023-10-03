import React from "react";
import './prices.css'
import { priceData } from './priceData'
import sliderBtn from '../Images/sliderBtn.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Pagination } from "swiper";

export default function Prices() {
    const [isHovering, setIsHovering] = React.useState(false);
    
    // Pass the hover function to be unique for every item the mouse hover is on  using the id 
    const handleHover = (id) => {
        setIsHovering(id !== isHovering ? id : null)
    }

    
    
    return (
        <div 
            className="prices">
            <div className="head">
                <h2>Exclusive 
                    <span> deals & discounts</span> 
                </h2>

                <p>Discover our fantastic early booking discounts & start planning your journey.</p>
            </div>

            
            <div className="pricesCard">
                <Swiper
                    slidesPerView={4}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                    375: {
                        slidesPerView:2,
                    },
                    600: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"          
                >

                {priceData.map((e,i)=> {
                    return (
                        <div
                            key={e.key}>
                            <SwiperSlide
                                key={e.key}>
                                
                                <div 
                                    className="generalCard">

                                    <div 
                                        onMouseEnter={() => handleHover(e.key)}
                                        onMouseLeave= {()=> handleHover(e.key)}
                                        className="cardImg">
                                            
                                        <img
                                            className="new"
                                            src={e.image} 
                                            alt="cardImage"
                                        />

                                        {isHovering === e.key ? 
                                            <button className="orderButton">Book now</button> : null
                                        }

                                    </div>

                                    <div 
                                        className="cardDetails">

                                        <div 
                                            className="cardInfo">
                                            <h2>{e.title}</h2>
                                            
                                            <p>
                                                <img 
                                                    src={e.starImage} 
                                                    alt="starIcon"
                                                />
                                                {e.rating}
                                            </p>

                                        </div>

                                        <div 
                                            className="priceDetails">

                                            
                                            <p>

                                                <img 
                                                    src={e.locationIcon}
                                                    alt="locationIcon"
                                                />

                                                {e.location}

                                            </p>

                                            <div 
                                                className="priceAmount">
                                                <p>{e.priceOne}</p>
                                                <p 
                                                    id="fillPrice">
                                                    {e.priceTwo}
                                                </p>
                                                
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </SwiperSlide>
                        </div>
                    )
                })}
                </Swiper>



            </div>

        </div>
    )
}