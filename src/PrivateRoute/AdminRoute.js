import React from 'react';
import { Redirect, Route,Navigate,useLocation } from 'react-router';
import UseAuth from '../hooks/UseAuth';


const AdminRoute = ({children,...rest}) => {
    const {user,admin}=UseAuth()
    const location=useLocation()

    return user?.email && admin ? children :<Navigate to='/' state={{from:location}} />
    
};

export default AdminRoute;