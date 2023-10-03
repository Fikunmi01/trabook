import React from "react";
import './blog.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function Blog() {
  
    return (
        <>
            <div 
                className="blog">

                <div 
                    className="blog-heading">
                    <h2>Get update with the 
                        <span> latest blog</span>
                    </h2>
                </div>

                <div 
                    className="main-blog">


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
                           slidesPerView: 2,
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
                            
                        <SwiperSlide>
                            <div 
                                className="blog-card">
                                <div
                                    className="slider-img">
                                    <img 
                                        src='../images/blog1.png'
                                        alt=""
                                    />
                                </div>

                                <div
                                    className="card-details">
                                    <p
                                        className="blog-head-p">
                                        The Amazing Effect of Travelling.
                                    </p>

                                    <p
                                        className="date">
                                        July 27, 2021
                                    </p>
                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            
                            <div 
                                className="blog-card">
                                <div
                                    className="slider-img">
                                    <img 
                                        src='../images/blog2.png'
                                        alt="blog post"
                                    />
                                </div>

                                <div
                                    className="card-details">
                                    <p
                                        className="blog-head-p">
                                        Travel far enough, You meet yourself.
                                    </p>

                                    <p
                                        className="date">
                                        July 27, 2021
                                    </p>
                                </div>

                            </div>
                            
                        </SwiperSlide>

                        <SwiperSlide>
                            <div 
                                className="blog-card">
                                <div
                                    className="slider-img">
                                    <img 
                                        src='../images/blog3.png'
                                        alt="blog post"
                                    />
                                </div>

                                <div
                                    className="card-details">
                                    <p
                                        className="blog-head-p">
                                        How to Save Money While Visiting Africa.
                                    </p>

                                    <p
                                        className="date">
                                        July 27, 2021
                                    </p>
                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div 
                                className="blog-card">
                                <div
                                    className="slider-img">
                                    <img 
                                        src= '../images/blog4.png'
                                        alt="blog post"
                                    />
                                </div>

                                <div
                                    className="card-details">
                                    <p
                                        className="blog-head-p">
                                        Reflection on 5 Months of Travel: Time to Hang
                                    </p>

                                    <p
                                        className="date">
                                        July 27, 2021
                                    </p>
                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div 
                                className="blog-card">
                                <div
                                    className="slider-img">
                                    <img 
                                        src='../images/blog1.png'
                                        alt=""
                                    />
                                </div>

                                <div
                                    className="card-details">
                                    <p
                                        className="blog-head-p">
                                        The Amazing Effect of Travelling.
                                    </p>

                                    <p
                                        className="date">
                                        July 27, 2021
                                    </p>
                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div 
                                className="blog-card">
                                <div
                                    className="slider-img">
                                    <img 
                                        src='../images/blog3.png'
                                        alt="blog post"
                                    />
                                </div>

                                <div
                                    className="card-details">
                                    <p
                                        className="blog-head-p">
                                        How to Save Money While Visiting Africa.
                                    </p>

                                    <p
                                        className="date">
                                        July 27, 2021
                                    </p>
                                </div>

                            </div>
                        </SwiperSlide>

                    </Swiper>
                  
                   
                </div>

            </div>
        </>
    )
}






