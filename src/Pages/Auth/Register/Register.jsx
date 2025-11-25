import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../hocks/UseAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';

const Register = () => {

const { register, handleSubmit, formState:{errors} } = useForm({mode:"onChange"});
const {registerUser, updateUserProfile} = UseAuth();
const location = useLocation();
const navigate = useNavigate();
const handleRegistration = (data) =>{
    console.log(data);

const profileImg = data.photo[0];


registerUser(data.email, data.password)
.then(result=>{
    console.log(result.user);

    //store the image
    const formData =new FormData();
    formData.append('image', profileImg)

    //send the photo to store and get the url
    const image_API_URL =`https://api.imgbb.com/1/upload?600&key=${import.meta.env.VITE_image_host_Key}`


    axios.post(image_API_URL, formData)
    .then( res =>{
        console.log('after image upload', res.data. data.url)

    })

//update profile
const userProfile ={
    displayName : data.name,
    photoURL : res.data.data.url
}
updateUserProfile(userProfile)
.then()
.catch(error => console.log(error))
navigate(location.state || '/');

})
.catch(error=>{
    console.log(error)
})
}

    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                 <h3 className='text-3xl text-center font-bold'>Welcome</h3>
      <p className='text-center font-bold'>Please Register</p>
           
            <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
                 <fieldset className="fieldset">

                    {/* email */}
          <label className="label">Email</label>
          <input type="email" {...register('email', {required:true})} className="input" placeholder="Email" />
        
        {/* namefield */}
        <label className="label">Name</label>
          <input type="text" {...register('name', {required:true})} className="input" placeholder="Your Name" />
       
       
        {/* photo field */}
        <label className="label">Photo</label>
        
          <input type="file" {...register('photo', {required:true})} className="file-input" placeholder="Your photo" />
         {/* {errors.email?.type==='required' &&<p className='text-red-500'>Email is required</p>} */}
         {/* password */}
          <label className="label">Password</label>
          <input type="password" {...register('password',{required:true,
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
{/* {
    errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 digit or longer</p>
}
{
errors.password?.type==='pattern' && <p className='text-red-500'>Password must have at least one uppercase, at least one lowercase, at least one number and at least onde special characters</p>
} */}



          <button className="btn btn-neutral mt-4">Register</button>

<SocialLogin></SocialLogin>
        </fieldset>

        <p>Already have any account? <Link state ={location.state} to="/login" className='text-blue-500 font-bold' >Login</Link></p>
            </form>
        </div>
    );
};

export default Register;