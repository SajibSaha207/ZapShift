import React from 'react';
import { useForm } from 'react-hook-form';

const SendParcel = () => {

    const {register, handleSubmit, formState:{ errors }} = useForm();

    const handleSendParcel = data =>{

    }
    return (
        <div>
            <h2 className='text-5xl font-bold mt-7'>Send A Parcel</h2>
            <form onSubmit={handleSubmit(handleSendParcel)} className='mt-12 p-4'>
                {/* document */}
                <div className=''>
                    <label className="label mr-8 text-black font-bold">
                        <input type="radio" {...register('parcelType')} value="document" className='radio text-green-400' defaultChecked />
                        Document
                        </label>

                        <label className="label text-black font-bold">
                        <input type="radio" {...register('parcelType')} value="Non-Document" className='radio text-green-400 ' />
                       Non-Document
                        </label>
                </div>
                <div>
                    {/* parcel info: name, weight */}
                </div>

                

                <div>

                </div>

             {/* two column    */}

             <div>
                {/* sender info */}
             </div>

             <div>
                {/* reveiver info */}
             </div>
            </form>
        </div>
    );
};

export default SendParcel;

//    <fieldset className="fieldset">
//           <label className="label">Email</label>
//           <input type="email" className="input" placeholder="Email" />
//           <label className="label">Password</label>
//           <input type="password" className="input" placeholder="Password" />
//           <div><a className="link link-hover">Forgot password?</a></div>
//           <button className="btn btn-neutral mt-4">Login</button>
//         </fieldset>