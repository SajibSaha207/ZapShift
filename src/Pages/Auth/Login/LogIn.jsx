import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../hocks/UseAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const LogIn = () => {

    // react hock from use korte 1st step
const { register, handleSubmit, formState:{errors} } = useForm({mode:"onChange"});
const {signInUser} = UseAuth();
const location = useLocation();
const navigate = useNavigate();



const handleLogin = (data) =>{
    signInUser(data.email, data.password)
    .then(result =>{
        console.log(result.user)
        navigate(location?.state || '/')
    })
    .catch(error=>{
        console.log(error)
    })

}

    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <h3 className='text-3xl text-center font-bold'>Welcome Back</h3>
      <p className='text-center font-bold'>Please Login</p>
      <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">

{/* email field */}
          <label className="label">Email</label>
          <input type="email" {...register('email', {required:true ,
            // {
            //     message: "A error happends"
            // }
          })} className="input" placeholder="Email" />

          {/* password field */}
          <label className="label">Password</label>
          <input type="password" {...register('password',{required: true,
 minLength:{ value: 6, message: "Password must be 6 characters"},
            pattern:{
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,
                      message: "Password must include uppercase, lowercase, number & special character"
            }

          })} className="input" placeholder="Password" />
          {
    errors.password && (

   <p className='text-red-500'>{errors.password.message}</p> )
    
}
         
         
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <SocialLogin></SocialLogin>
        </fieldset>
        <p>Don't have any account? <Link to="/register" className='text-red-400 font-bold' >Register</Link></p>
      </form>
    </div>
    );
};

export default LogIn;