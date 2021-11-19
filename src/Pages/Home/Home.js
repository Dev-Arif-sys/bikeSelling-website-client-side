import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import RatingStar from '../../Shared/RatingStar/RatingStar';
import Bikes from './Bikes/Bikes';
import HeroBanner from './HeroBanner/HeroBanner';
import News from './News/News';
import Reviews from './Reviews/Reviews';
import ReviewSlider from './ReviewSlider/ReviewSlider';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HeroBanner></HeroBanner>
           
            <Bikes></Bikes>
            <Reviews></Reviews>
            <ReviewSlider></ReviewSlider>
            <News></News>
            <Footer></Footer>
        </div>
    );
};

export default Home;