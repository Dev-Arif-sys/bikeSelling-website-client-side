import React, { useState } from 'react';
import { ButtonGroup, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation,useNavigate } from 'react-router';
import UseAuth from '../../hooks/UseAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './Login.css'

const Login = () => {
    const { SignInWithGoogle,loginUser,error} = UseAuth();
    const [loginData,setLoginData]=useState({})
    const navigate=useNavigate()
    const location=useLocation()
    const redirect_URI=location?.state?.from || '/home'
    

    const HandleOnBlur=(e)=>{
        const field=e.target.name
        const value=e.target.value
        const newLoginData={...loginData}
        newLoginData[field]=value;
        setLoginData(newLoginData)    
    }

    const handleOnSubmit=(e)=>{
        e.preventDefault()
        
        loginUser(loginData.email,loginData.password,navigate,redirect_URI)
       
    }
    return (
        <div>
            <Navigation></Navigation>
           <div className='signin' >
           <h4 className='text-center text-white pt-3 fw-bold'>Log In Here</h4>
               <div className=' d-flex justify-content-center align-items-center h-100'>
               
                   <div>
                       
                       <Form className='form' onSubmit={handleOnSubmit}>
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label className='text-white' >Email address</Form.Label>
                       <Form.Control
                        type ="email" 
                        placeholder="Enter email"
                        name='email' 
                        onBlur={HandleOnBlur}
                        />

                       </Form.Group>
                       <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Label className='text-white' >Password</Form.Label>
                       <Form.Control 
                       type ="password" 
                       name='password'
                       placeholder="Password"
                       onBlur={HandleOnBlur}
                        />
                       </Form.Group>

                        
                       
                       <Button variant="primary" type ="submit">
                       Log in
                       </Button>
                       </Form>
                       {
                           error &&   <Alert className='my-3'  variant='warning'>
                           {error}
                         </Alert>
                       }
                       <div className="my-4 text-center ">
                             <Link style={{textDecoration:'none',color:'white'}} to='/register' className='createAccount'>
                                 new here? Create an account
                             </Link>
                         </div>
                       <div className='text-center mt-5'><button onClick={()=>{SignInWithGoogle(navigate,redirect_URI)}} className='banner-btn'>google sign in</button></div>
                   </div>
               
               </div>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Login;