import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import './Navigation.css'



const Navigation = () => {
    const {user,logOut}=UseAuth()
    
    return (
        <div>
            <Navbar className='py-2' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar className='logo ' href="#home"><span className="logo-part">RACER </span>   EDGE</Navbar>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                     { user?.email &&  <p className='userName'  > {user?.displayName}</p>}

                            <Nav.Link as={Link} className='navItem'  to="/home">Home</Nav.Link>

                            <Nav.Link  as={Link} className='navItem'   to="/shop">Shop</Nav.Link>
                            <Nav.Link  as={Link} className='navItem'   to="/dashboard">Dashboard</Nav.Link>
                             {
                                 user?.email  ?  <button onClick={logOut} className='sign-btn'>
                                 log out
                             </button> :  <Link to='/login'>
                             <button className='sign-btn'>
                                log in
                            </button>
                             </Link>
                             }
                             
                           







                        </Nav>
                    </Navbar.Collapse >
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;