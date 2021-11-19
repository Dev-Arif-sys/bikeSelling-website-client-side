import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import UseAuth from '../../../hooks/UseAuth';

const MyOrders = () => {
    const { user ,token} = UseAuth()
    const [orders, setOrder] = useState([])
    const [bikes,setBikes]=useState([])
    
    useEffect(() => {
        fetch(`https://sheltered-beyond-04487.herokuapp.com/order/?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
            })
    }, [])

    useEffect(()=>{
        
        fetch('https://sheltered-beyond-04487.herokuapp.com/bikes')
        .then(res=>res.json())
        .then(data=>{
            setBikes(data)
         
        })
        
    },[])

    orders?.forEach(order=>{
       const matchedProduct=bikes.find(bike=>bike.key==order.productKey)
       order['product']=matchedProduct
   
    })


    const handleDelete=(id)=>{
        if(window.confirm('are you sure to delete')){
          fetch(`https://sheltered-beyond-04487.herokuapp.com/orders/${id}`,{
              method:'DELETE',
              headers:{
                  'authorization':`Bearer ${token}`
              }
          })
          const restOrder=orders.filter(order=>order._id!==id)
          setOrder(restOrder)
        }
    }
    
    return (
        <div className='custom-container'>
            <h4 className='section-heading fw-bold text-center mt-5 mb-3'>Your Orders here</h4>

            <Table striped responsive hover>
                <thead>
                    <tr>
                        <th>image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                     {
                         orders.map(order=>{
                                return(
                                    <tr key={order._id}>
                                    <td><img src={order?.product?.image} width='50' alt="" /></td>
                                    <td className='fw-bold'>{order?.product?.name}</td>
                                    <td className='text-danger'>{order?.product?.price}</td>
                                    <td>{order?.product?.description.slice(0,40)} <a href="">see more</a> </td>
                                    <td> <button className='btn btn-danger btn-sm' onClick={()=>handleDelete(order._id)}>Cancel</button> </td>
                                </tr>
                                )
                         })
                     }
                   
                    
                </tbody>
            </Table>
        </div>
    );
};

export default MyOrders;