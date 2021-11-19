import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink,useRouteMatch,Switch,Route, Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import AdminRoute from '../../PrivateRoute/AdminRoute';
import AddProduct from './AddProduct/AddProduct';
import './Dashboard.css'
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageAllOrder from './ManageAllOrder/ManageAllOrder';
import ManageProducts from './ManageProducts/ManageProducts';
import MyOrders from './MyOrders/MyOrders';
import Payment from './Payment/Payment';
import ReviewsAdd from './ReviewsAdd/ReviewsAdd';


const Dashboard = () => {
    const [addClass,setAddClass]=useState(false)
    let { path, url } = useRouteMatch();
    const {admin,logOut,user}=UseAuth()
    const handleToggle=()=>{
           setAddClass(!addClass)
    }

   
    return (
        <div>
              <div className={ addClass &&'toggled'} id="wrapper">
       
        <div className="bg-white" id="sidebar-wrapper">
        <h3 className='logo  ms-3 mt-4' ><span className="logo-part">RACER </span>   EDGE</h3>
            <div className="list-group list-group-flush my-3">

               {/* users deshaboard */}
            



      {/* admin dashboard */}
           { admin ?  <div> <NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
 className='navLink' to={`${url}/manageOrders`}>
                <p className="list-group-item
                 list-group-item-action bg-transparent second-text fw-bold "><i
                        className="fas fa-tachometer-alt me-2"></i>Manage All Orders</p>
                          </NavLink>

                          <NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
 className='navLink'  to={`${url}/addProduct`}>
                <p className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-project-diagram me-2"></i>Add A Product</p>
                         </NavLink>
                         <NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
 className='navLink' to={`${url}/makeAdmin`}>    
                <p className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                    className="fas fa-user-secret me-2"></i>Make Admin</p>
                        </NavLink>

                        <NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
 className='navLink' to={`${url}/ManageProducts`}>    
                <p  className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-paperclip me-2"></i>Manage Products</p>
                        </NavLink> </div>  :     <div>
               <NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
 className='navLink'  to={`${url}`}>
                <p className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
               
                        <i
                        className="fas fa-shipping-fast me-2"></i>myOrders</p>
                         </NavLink>


                         <NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
 className='navLink'  to={`${url}/payment`}>
                <p className="list-group-item list-group-item-action bg-transparent second-text fw-bold ">
               
                <i className="fas fa-money-bill-wave-alt me-2"></i>Payment</p>
                         </NavLink>


                         <NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
 className='navLink'  to={`${url}/reviews`}>
                <p className="list-group-item list-group-item-action bg-transparent second-text fw-bold ">
               
                <i className="fas fa-star-half-alt me-2"></i>Reviews</p>
                         </NavLink>
                         </div>}

                         <div onClick={logOut} style={{cursor:'pointer'}} >
                <p className="list-group-item list-group-item-action bg-transparent second-text fw-bold ">
               
                <i className="fas fa-sign-out-alt me-2"></i>Log Out</p>
                         </div>  
                
            </div>
        </div>
         {/* /#sidebar-wrapper  */}

         {/* Page Content  */}

               
     <div className='w-100'>
                <Navbar >
    <Container>
    <Navbar.Brand href="#home">  <div className="d-flex align-items-center">
                    <i onClick={handleToggle} className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
                    <h2 className="fs-2 m-0">Dashboard</h2>
                </div></Navbar.Brand>
    <Nav className="ms-auto">
    <Nav.Link as={Link} className='navItem'  to="/home">Home</Nav.Link>

      <Nav.Link className='me-5 fw-bold' style={{marginRight:"30px"}} >{user?.displayName}</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <Switch>
    {
      admin ? <AdminRoute exact  path={`${path}`}>
      <ManageAllOrder></ManageAllOrder>
      </AdminRoute> : <Route exact  path={`${path}`}>
      <MyOrders></MyOrders>
       </Route>
    }

     
  
        <Route  path={`${path}/reviews`}>
       <ReviewsAdd></ReviewsAdd>
        </Route>
        <Route  path={`${path}/payment`}>
       <Payment></Payment>
        </Route>
        <AdminRoute  path={`${path}/manageOrders`}>
        <ManageAllOrder></ManageAllOrder>
        </AdminRoute>
        <AdminRoute path={`${path}/addProduct`}>
          <AddProduct></AddProduct>
        </AdminRoute>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/manageProducts`}>
          <ManageProducts></ManageProducts>
        </AdminRoute>
      </Switch>
   
                
           

            
        </div>
    </div>
    </div>

  
        
    );
};

export default Dashboard;