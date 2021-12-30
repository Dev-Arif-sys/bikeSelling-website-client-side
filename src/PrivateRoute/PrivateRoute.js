import React from 'react';
import { Redirect, Route,Navigate,useLocation } from 'react-router';
import UseAuth from '../hooks/UseAuth';
import Loading from '../Shared/Loading/Loading';




const PrivateRoute = ({children,...rest}) => {
     const {user,isLoading}=UseAuth()
     const location= useLocation()
    
     if(isLoading){
         return(
             <div className='my-5  text-center'>
                 <Loading></Loading>
             </div>
         )
     }
   

     return user?.email ? children : <Navigate to='/login' state={{from:location}} />
    
};

export default PrivateRoute;