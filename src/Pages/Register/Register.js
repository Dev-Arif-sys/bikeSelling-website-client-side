import React, { useState } from 'react';
import { ButtonGroup, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import UseAuth from '../../hooks/UseAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
    const { SignInWithGoogle,registerUser,error } = UseAuth();
    const [registerData,setRegisterData]=useState({})
    const [notMatched,setNotMatched]=useState(false)
    const history=useHistory()
    const HandleOnBlur=(e)=>{
        const field=e.target.name
        const value=e.target.value
        const newLoginData={...registerData}
        newLoginData[field]=value;
        setRegisterData(newLoginData)    
    }
 
    const handleOnSubmit=(e)=>{
       
        e.preventDefault()
        if(registerData.password!=registerData.password2){
            setNotMatched(true)
            return
        }else{
            setNotMatched(false)
            registerUser(registerData.name,registerData.email,registerData.password,history)
           
        } 
       
    }
    return (
        <div>
            <Navigation></Navigation>
           <div className='signin' >
               <h4 className='text-center text-white pt-3 fw-bold'>Register Here</h4>
           
               <div className=' d-flex justify-content-center align-items-center h-100'>
               
                   <div>
                       
                       <Form className='form' onSubmit={handleOnSubmit}>
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label className='text-white' >Your Name</Form.Label>
                       <Form.Control
                        type ="text" 
                        placeholder="Enter Name"
                        name='name' 
                        onBlur={HandleOnBlur}
                        />

                       </Form.Group>
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

                       <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Label className='text-white' > Retype Password</Form.Label>
                       <Form.Control 
                       type ="password" 
                       name='password2'
                       placeholder="Retype Password"
                       onBlur={HandleOnBlur}
                        />
                       </Form.Group>
                       {
                           error &&   <Alert  variant='warning'>
                           {error}
                         </Alert>
                       }
                      
                       {
                           notMatched && <Alert  variant='warning'>
                           Your password did not match . please try again
                         </Alert>
                       
                       }
                       <Button variant="primary" type ="submit">
                       Register
                       </Button>
                       </Form>

                       <div className="my-4 text-center ">
                             <Link style={{textDecoration:'none',color:'white'}} to='/login' className='createAccount'>
                                 Already Have An Accoount? Log In !
                             </Link>
                         </div>
                       <div className='text-center mt-5'><button onClick={SignInWithGoogle} className='banner-btn'>google sign in</button></div>
                   </div>
               
               </div>
           </div>
           <Footer></Footer>
        </div>
        
    );
};

export default Register;