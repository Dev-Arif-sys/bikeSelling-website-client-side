import React from 'react';
import Button from '@restart/ui/esm/Button';
import { Form } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="container">
                <div className=" row justify-content-center">
                   <div className="col-md-3">
                       <div>
                           <h3 className="fs-3 fw-bold  "><span className="logo-part">RACER</span>EDGE</h3>
                           <p >the most wanted bike that you want to have is in our garrage . take it and get a ride </p>
                       </div>
                       <div className="social-link">
            
                       </div>
                       <div>
                           <small >copyright &copy;RACEREDGE</small>
                       </div>
                   </div>
                   {/* our presence */}
                   <div className=" presence text-left col-md-3">
 
                       <ul>
                       <h5>Company</h5>
                           <li>
                               <a href="">About us</a>
            
                           </li>
                           <li>
                               <a href="">Join Biker's Club </a>
                           </li>
                           <li>
                               <a href="">Bike Parts</a>
                           </li>
                           <li>
                               <a href="">Work with us</a>
                           </li>
                           <li>
                               <a href="">Meet Bikers</a>
                           </li>
                       </ul>
            
            
                   </div>
            
                {/* our presence */}
                <div className=" presence text-left col-md-3">
                
                <ul>
                <h5>Support</h5>
                           <li>
                               <a href="">Registration</a>
            
                           </li>
                           <li>
                               <a href="">Legal Step</a>
                           </li>
                           <li>
                               <a href="">Contact</a>
                           </li>
                           <li>
                               <a href="">Affiliations</a>
                           </li>
                           <li>
                               <a href="">Privacy policy</a>
                           </li>
                       </ul>
                </div>
            
               {/* our presence */}
               
               <div className=" presence text-left col-md-3">
                
                <ul>
                <h5>Your Account</h5>
                           <li>
                               <a href="">Your orders</a>
            
                           </li>
                           <li>
                               <a href="">Your Wishlist</a>
                           </li>
                           <li>
                               <a href="">Payment</a>
                           </li>
                           <li>
                               <a href="">Delivery</a>
                           </li>
                           <li>
                               <a href="">Privacy policy</a>
                           </li>
                       </ul>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;