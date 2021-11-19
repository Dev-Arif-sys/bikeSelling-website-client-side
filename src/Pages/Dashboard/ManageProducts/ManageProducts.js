import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageProducts = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        
        fetch('https://sheltered-beyond-04487.herokuapp.com/bikes')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
         
        })
       
    },[])

    const handleDelete=(id)=>{
        if(window.confirm("are you sure to delete the product")){
            fetch(`https://sheltered-beyond-04487.herokuapp.com/bikes/${id}`,{
                method:'DELETE'
            }).then(res=>res.json())
            .then(data=>{
                if(data.deletedCount){
                    alert('deleted Successfully')
                }
            })
            const restProducts=products.filter(product=>product._id!==id)
            setProducts(restProducts)
        }
        
       
    }
    return (
        <div className='custom-container' >
            <h4 className='section-heading fw-bold text-center mt-5 mb-3'>Manage Your Products here</h4>
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
          products.map(product=>{
              return(
                <tr key={product._id}>
                    <td><img src={product.image} width='50' alt="" /></td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description.slice(0,20)} <a href="">see more</a></td>
                <td><button onClick={()=>handleDelete(product._id)} className='btn btn-warning btn-sm'>delete</button></td>
              </tr>
              )
          })
      }
    
   
  </tbody>
</Table>
        </div>
    );
};

export default ManageProducts;