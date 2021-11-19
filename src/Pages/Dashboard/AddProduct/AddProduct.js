import React,{useState,useEffect} from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'

const AddProduct = () => {
    const [bikes,setBikes]=useState([])
    const { register, handleSubmit, reset,watch, formState: { errors } } = useForm();

    useEffect(()=>{
        
        fetch('https://sheltered-beyond-04487.herokuapp.com/bikes')
        .then(res=>res.json())
        .then(data=>{
            setBikes(data)
         
        })
       
    },[])

    const onSubmit = data => {
      data['key']=bikes.length;
      console.log(data)
      fetch('https://sheltered-beyond-04487.herokuapp.com/bikes',{
          method:'POST',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(data)
      }).then(res=>res.json())
       .then(data=>{
           console.log(data)
           if(data?.insertedId){
               alert('prouct added successfully')
               reset()
           }
       })
    };

   
    return (
        <div className='custom-container addProduct'>
            <h4 className='section-heading fw-bold'>Add a Product</h4>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>

                <input placeholder="Product Name" {...register("name")} />

                <input placeholder="Image Link" {...register("image")} />
                <input type='number' placeholder="Product Price" {...register("price")} />
                <textarea placeholder="product Description" {...register("description")} />





                <input className='form-btn' value='Add Product' type="submit" />
            </form>

        </div>
    );
};

export default AddProduct;