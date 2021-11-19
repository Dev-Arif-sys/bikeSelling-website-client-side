import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../hooks/UseAuth';
import Loading from '../Shared/Loading/Loading';




const PrivateRoute = ({children,...rest}) => {
     const {user,isLoading}=UseAuth()
    
     if(isLoading){
         return(
             <div className='my-5  text-center'>
                 <Loading></Loading>
             </div>
         )
     }
   
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user?.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
           
    
    );
};

export default PrivateRoute;