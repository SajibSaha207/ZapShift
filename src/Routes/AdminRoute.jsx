import React from 'react';
import UseAuth from '../hocks/UseAuth';
import useRole from '../hocks/useRole';

const AdminRoute = ({children}) => {

    const { loading} = UseAuth();
    const {role, roleLoading} = useRole();

    if(loading || roleLoading){
    return <div className='text-center'>
        <span className="loading loading-spinner text-error  "></span>
    </div>
   }

   if (role !== 'admin'){
    return <div>Forbidden Access</div>
   }
    return children
};

export default AdminRoute;