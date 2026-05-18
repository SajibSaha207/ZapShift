import React from 'react';
import { useForm } from 'react-hook-form';

const SendParcel = () => {

    const {register, handleSubmit, formState:{ errors }} = useForm();

    const handleSendParcel = data =>{

    }
    return (
        <div className=''>
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

                  {/* parcel info: name, weight */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-8'>
                    <fieldset className="fieldset">
           <label className="label text-black">Parcel Name</label>
          <input type="text" {...register('parcelName')} className="input w-full" placeholder="Parcel Name" />
        
        </fieldset>
                    <fieldset className="fieldset">
           <label className="label text-black">Parcel Weight</label>
          <input type="number" {...register('parcelWeight')} className="input w-full" placeholder="Parcel Weight" />
        
        </fieldset>
                </div>

                

                {/* <div>

                </div> */}

             {/* two column    */}

             <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* Sender info */}
                
                <fieldset className="fieldset">
                    <h4 className="text-2xl font-semibold">Sender Details</h4>
                    {/* Sender Name */}
           <label className="label text-black">Sender Name</label>
          <input type="text" {...register('senderName')} className="input w-full" placeholder="Sender Name" />

          {/* Sender Address */}
           <label className="label text-black mt-4">Sender Address</label>
          <input type="text" {...register('senderAddress')} className="input w-full" placeholder="Sender Address" />

        {/* Sender phone number */}
          <label className="label text-black mt-4">Sender Phone Number</label>
          <input type="number" {...register('senderPhoneNumber')} className="input w-full" placeholder="Sender Phone Number" />

        {/* Sender Distict */}
          <label className="label text-black mt-4">Sender District</label>
          <input type="text" {...register('senderDistrict')} className="input w-full" placeholder="Sender District" />
        
        {/* PickUp point */}
         <label className="label text-black mt-4">PickUp Point</label>
          <input type="text" {...register('pickupPoint')} className="input w-full" placeholder="pickup point" />
        
        </fieldset>

        {/* reveiver info */}

             <fieldset className="fieldset">
                <h4 className="text-2xl font-semibold">Reciver Details</h4>
                    {/* Riciver Name */}
           <label className="label text-black">Reciver Name</label>
          <input type="text" {...register('reciverName')} className="input w-full" placeholder="Reciver Name" />

          {/* Reciver Address */}
           <label className="label text-black mt-4">Reciver Address</label>
          <input type="text" {...register('reciverAddress')} className="input w-full" placeholder="Reciver Address" />

        {/* Reciver phone number */}
          <label className="label text-black mt-4">Reciver Phone Number</label>
          <input type="number" {...register('reciverPhoneNumber')} className="input w-full" placeholder="Reciver Phone Number" />

        {/* Reciver Distict */}
          <label className="label text-black mt-4">Reciver District</label>
          <input type="text" {...register('reciverDistrict')} className="input w-full" placeholder="Reciver District" />
        
        {/* PickUp point */}
         <label className="label text-black mt-4">Delivary Point</label>
          <input type="text" {...register('delivaryPoint')} className="input w-full" placeholder="Delivary point" />
        
        </fieldset>
             </div>

             <div>
                
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