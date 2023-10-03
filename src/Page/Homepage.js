import React from "react";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Plans from "../components/vacationPlans";
import Prices from "../components/prices";
import Offer from "../components/services";
import './Homepage.css'
import Testimonial from "../components/testimonial";
import Blog from "../components/blog";
import Footer from "../components/footer";

export default function Homepage() {
    return (
        <div className="homepage">
            <Navbar/>
            <Hero/>
            <Offer/>
            <Prices/>
            <Plans/>
            <Testimonial/>
            <Blog/>
            <Footer/>

        </div>
    )
}