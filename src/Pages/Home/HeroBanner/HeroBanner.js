import React from 'react';
import './HeroBanner.css'

const HeroBanner = () => {
    return (
        <div className='banner'>
         <div className='d-flex justify-content-start align-items-center h-100'>
             <div className='custom-container' >
                 <h1 className='banner-header'>Riding Makes One  
                 
                 Happy</h1>
                 <p className='banner-sub-header'>Take Your Bike and Visit , Enjoy your Ride.</p>
                 <button className="banner-btn">Visit Shop</button>
             </div>
         </div>
        </div>
    );
};

export default HeroBanner;