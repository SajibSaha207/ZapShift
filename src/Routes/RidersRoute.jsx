import React from 'react';
import UseAuth from '../hocks/UseAuth';
import useRole from '../hocks/useRole';
import ForbiddenAccess from '../Components/ForbiddenAccess';

const RidersRoute = ({children}) => {
     const { loading, user} = UseAuth();
    const {role, roleLoading} = useRole();

    if(loading || !user || roleLoading){
    return <div className='text-center'>
        <span className="loading loading-spinner text-error"></span>
    </div>
   }

   if (role !== 'rider'){
    return <ForbiddenAccess></ForbiddenAccess>
   }
    return children
};

export default RidersRoute;