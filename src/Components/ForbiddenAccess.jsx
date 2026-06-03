import React from 'react';
import Lottie from "react-lottie";
import ForbiddenAnimation from '../assets/Forbdden.json'
import { Link } from 'react-router';
 
const ForbiddenAccess = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <Lottie
            options ={{
                loop: false,
                autoplay: true,
                animationData: ForbiddenAnimation,
            }}
            height = {200}
            width = {200}
            >

            </Lottie>

            <h1 className="text-3xl font-bold text-red-500">Access Forbidden</h1>
            <div className='my-3 space-x-3'>
                <Link to ='/' className='btn btn-primary text-black'>Home</Link>
            </div>
        </div>
    );
};

export default ForbiddenAccess;