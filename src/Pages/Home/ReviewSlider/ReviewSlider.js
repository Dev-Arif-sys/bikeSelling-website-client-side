import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './ReviewSlider.css'
import RatingStar from '../../../Shared/RatingStar/RatingStar';

const ReviewSlider = (props) => {
    const reviews=props.reviews
 
   
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <div className='custom-container '>
       
        <Slider {...settings} >
          {
              reviews?.map(review=>{
               
               return(<div className='review' key={review.name}>
                <div>
                    <p>"{review.review}"</p>
                </div>
                <div className='d-flex align-items-center'>
                    <div>
                        <img src={review.image} alt="" />
                    </div>
                    <div className='ms-1'>
                        <p className='name fw-bold'>{review.userName}</p>
                     <small>   <RatingStar rating={review.rating}></RatingStar></small>
                    </div>
                </div>
            </div>)
              })
          }
           
        </Slider>
      </div>
    );
};

export default ReviewSlider;