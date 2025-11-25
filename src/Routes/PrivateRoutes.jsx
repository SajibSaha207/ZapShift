import React from 'react';
import UseAuth from '../hocks/UseAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
   const {user,loading} = UseAuth();

const location = useLocation();

   if(loading){
    return <div>
        <span className="loading loading-spinner text-error"></span>
    </div>
   }

   if(!user){
    return <Navigate state={location.pathname} to="/login"></Navigate>
   }
   
    return  children;
    
};

export default PrivateRoutes;