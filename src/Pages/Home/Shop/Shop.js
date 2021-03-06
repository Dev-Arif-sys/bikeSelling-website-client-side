import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import UseAuth from '../../../hooks/UseAuth';
import Loading from '../../../Shared/Loading/Loading';
import Navigation from '../../../Shared/Navigation/Navigation';

const Shop = () => {
    const [bikes, setBikes] = useState(null);
    const [loading, setLoading] = useState(false)
    const {setIsLoading}=UseAuth()

    useEffect(() => {
        setLoading(true)
        fetch('https://sheltered-beyond-04487.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => {
                setBikes(data)

            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const navigate=useNavigate()

    const handleBuyNow=(id)=>{
        setIsLoading(false)
     navigate(`bikes/${id}`)
    }

    return (
        <div>
            <Navigation></Navigation>
            <div className='custom-container'>
                <h3 className='fw-bold text-center my-4 section-heading'>Our Shop Collection</h3>
                {
                    loading && <div className='text-center my-5'> <Loading></Loading> </div>
                }
                <Row xs={1} sm={2} md={3} className="g-3 ">

                    {
                        bikes?.map(bike => <Col key={bike._id}>
                            <div className='custom-card'>
                                <div className='image'>
                                    <img src={bike.image} />
                                </div>
                                <div className='my-3'>
                                    <div className='d-flex justify-content-between mb-2'>
                                        <h5 className='fw-bold'>{bike.name}</h5>
                                        <h5 className='price'><small>tk.</small>{bike.price}</h5>
                                    </div>
                                    <p>{bike.description.slice(0, 140)}... <button className='viewMore'>view more</button></p>
                                    <button onClick={() => { handleBuyNow(bike._id) }} className='btn btn-danger btn-sm'>Buy Now</button>
                                </div>
                            </div>
                        </Col>
                        )

                    }


                </Row>

            </div>
        </div>
    );
};

export default Shop;