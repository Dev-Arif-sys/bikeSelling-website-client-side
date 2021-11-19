import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../hooks/UseAuth';

const ReviewsAdd = () => {
    const {user}=UseAuth()
    const { register, handleSubmit, reset,watch, formState: { errors } } = useForm();
    const [isWarning,setWarning]=useState(false)
   console.log(user)
    const onSubmit = data => {
        if(data.rating>5){
          setWarning(true)
        }else{
            if(user.photoURL==null){
                data['image']='https://i.ibb.co/g4k2WKP/profile-dem.jpg'
            }else{
                data['image']=user.photoURL
            }
          fetch(`https://sheltered-beyond-04487.herokuapp.com/reviews`,{
           method:'POST',
           headers:{
             'content-type':'application/json'
           } ,
           body:JSON.stringify(data)
          }).then(res=>res.json())
          .then(data=>{
            if(data.insertedId){
              alert('review added')
            }
          })
        }
    
       
      };
    return (<div className='custom-container addProduct'>
            <h4 className='section-heading fw-bold mt-5 mb-3'>Say About Our Service And Product</h4>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>

                <input defaultValue={user.displayName} {...register("userName")} />

            
                <input type='number' placeholder="Rating [0-5]" {...register("rating")} />
               
                <textarea placeholder="your review" {...register("review")} />
              
               




                <input className='form-btn' value='Add Product' type="submit" />
                {
              isWarning && <Alert variant='warning'>
              Rating must be within 0-5.
            </Alert>
            }
            </form>
            
            

        </div>
    );
};

export default ReviewsAdd;