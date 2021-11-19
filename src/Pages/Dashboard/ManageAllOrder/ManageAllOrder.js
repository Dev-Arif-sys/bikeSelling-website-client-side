import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useRouteMatch } from 'react-router';
import useAuth from '../../../hooks/UseAuth'

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([])
    const [bikes, setBikes] = useState([]);
    const {token}=useAuth()
    useEffect(() => {
        fetch('https://sheltered-beyond-04487.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {

                setOrders(data)
            })
    }, [])

    useEffect(() => {

        fetch('https://sheltered-beyond-04487.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => {

                setBikes(data)

            })

    }, [])

    orders?.forEach(order => {
        const mathcedProduct = bikes.find(bike => bike.key == order.productKey)
        order['product'] = mathcedProduct
        
    })

   const handleShip=(id)=>{
       const shipped={status:'shipped'}
       fetch(`https://sheltered-beyond-04487.herokuapp.com/orders/${id}`,{
           method:'PUT',
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(shipped)
       })
       const shippedOrder=orders.find(order=>order._id==id);
       shippedOrder.status='shipped'
       const restOrder=orders.filter(order=>order._id!==id)
       const updateOrder=[...restOrder,shippedOrder]
    setOrders(updateOrder)
   }

  const handleDelete=(id)=>{
      if(window.confirm('are you sure to delete')){
        fetch(`https://sheltered-beyond-04487.herokuapp.com/orders/${id}`,{
            method:'DELETE',
            headers:{
                'authorization':`Bearer ${token}`
            }
        })
        const restOrder=orders.filter(order=>order._id!==id)
        setOrders(restOrder)
      }
     

  }

    return (
        <div>
            <div className="container-fluid px-4">
                <div className="row g-3 my-2">
                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">{bikes.length}</h3>
                                <p className="fs-5">Products</p>
                            </div>
                            <i className="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">{orders.length}</h3>
                                <p className="fs-5">Orders</p>
                            </div>
                            <i
                                className="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">50</h3>
                                <p className="fs-5">Delivery</p>
                            </div>
                            <i className="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">%12</h3>
                                <p className="fs-5">Increase</p>
                            </div>
                            <i className="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                        </div>
                    </div>
                </div>

                <div className="row my-5">
                    <h3 className="fs-4 mb-3">Recent Orders</h3>
                    <div className="col">
                        <Table bordered hover responsive>
                            <thead>
                                <tr>
                                  
                                    <th>Product</th>
                                    <th>Customer</th>
                                    <th>Price</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                    <th>status</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders?.map(order=>{
                                        return(
                                            <tr key={order._id}>
                                           
                                            <td>{order?.product?.name}</td>
                                            <td>{order?.name}</td>
                                            <td>{order?.product?.price}</td>
                                            <td>{order?.address}</td>
                                           <td>{order?.phone}</td>
                                           <td>{order?.status}</td>
                                           {
                                            order?.status=='pending' &&  <td><button 
                                            onClick={()=>handleShip(order._id)} className='btn btn-danger btn-sm'>ship</button></td> 
                                          
                                           }
                                           {
                                               order?.status=='pending' &&  <td><button 
                                               onClick={()=>handleDelete(order._id)} className='btn btn-warning btn-sm'>delete</button></td>
                                           }
                                             
                                          
                                        </tr>
                                        
                                        )
                                    })
                                }
                               
                                
                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ManageAllOrder;