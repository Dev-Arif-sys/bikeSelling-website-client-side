import React from 'react';
import Rating from 'react-rating';
import './RatingStar.css'


const RatingStar = (props) => {
     const rating=props.rating
    return (
        <div>
            <Rating
                initialRating={rating}
              emptySymbol=" far fa-star icon"
              fullSymbol="fas fa-star icon"
            readonly
            ></Rating>
        </div>
    );
};

export default RatingStar;