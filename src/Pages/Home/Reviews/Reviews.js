import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import RatingStar from '../../../Shared/RatingStar/RatingStar';
import ReviewSlider from '../ReviewSlider/ReviewSlider';
import './review.css'

const Reviews = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('https://sheltered-beyond-04487.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>{
            
            setReviews(data)
        })
    },[])
    return (
        <div>
               <h3 className='fw-bold text-center mt-4 mb-5 section-heading'>What our customer review</h3>
         
            <ReviewSlider reviews={reviews}></ReviewSlider>
        </div>
    );
};

export default Reviews;