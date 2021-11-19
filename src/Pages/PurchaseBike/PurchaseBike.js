import React, { useEffect, useState } from 'react';
import { Col, Form, Row,Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import UseAuth from '../../hooks/UseAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './PurchaseBike.css'

const PurchaseBike = () => {
    const [bike, setBike] = useState({})
    const [order,setOrder]=useState({})
    const {user}=UseAuth()
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        fetch(`https://sheltered-beyond-04487.herokuapp.com/bikes/${id}`)
            .then(res => res.json())
            .then(data => {
                setBike(data);
            })
    }, [])

    const handelOnBlur=(e)=>{
      const field=e.target.name
      const value=e.target.value
      const newOrder={...order}
      newOrder[field]=value
      setOrder(newOrder)
    }
    const handleOnSubmit=(e)=>{
        order['name']=user.displayName;
        order['email']=user.email;
        order['productKey']=bike.key
        order['status']='pending'
        console.log(order)

        fetch('https://sheltered-beyond-04487.herokuapp.com/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json',

            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.insertedId){
                alert('order placed Successfully')
                window.location.reload()
            }
        })
        e.preventDefault()
    }



    return (
        <div>
            <Navigation></Navigation>
            <Row className='custom-container'>
                <Col sm={6}>
                    <div>
                        <h5 className='text-danger fw-bold text-center mt-3 mb-4'>Bike Details</h5>
                        <div>
                            <div className='order-image'>
                                <img src={bike.image} alt="" />
                            </div>
                            <div className='d-flex justify-content-around my-5'>
                                <h6 className="fw-bold">{bike.name}</h6>
                                <h6 className='text-warning'><small>tk.</small>{bike.price}</h6>
                            </div>
                            <p>
                                {bike.description}
                            </p>
                        </div>
                    </div>
                </Col>
                <Col sm={6}>
                    <h5 className='text-danger fw-bold text-center mt-3 mb-4'>Place Order</h5>
                    <Form onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control 
                            type="text"
                            value={user?.displayName || " "}
                            name='name'
                             placeholder="Enter Name" />

                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"
                              value={user?.email || ' '} 
                            name='name' placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your address</Form.Label>
                            <Form.Control 
                            type="text" 
                            onBlur={handelOnBlur}
                            name='address'
                            placeholder=" address" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone No</Form.Label>
                            <Form.Control 
                            type="number"
                            name='phone' 
                            onBlur={handelOnBlur}
                            placeholder="Enter Number" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Date</Form.Label>
                            <Form.Control 
                            type="date"
                            onBlur={handelOnBlur}
                            name='date'
                             placeholder="Enter your favorable date" />

                        </Form.Group>

                        
                      
                        <Button variant="primary" type="submit">
                            Order
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Footer></Footer>
        </div>
    );
};

export default PurchaseBike;