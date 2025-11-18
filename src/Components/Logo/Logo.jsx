import React from 'react';
import logo from '../../assets/logo.png'
const Logo = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <h3 className='text-3xl'>ZapShift</h3>
        </div>
    );
};

export default Logo;