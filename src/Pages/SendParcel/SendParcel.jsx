import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hocks/useAxiosSecure';
import UseAuth from '../../hocks/UseAuth';

const SendParcel = () => {

    const {register, 
        handleSubmit, 
        control, 
        // formState:{ errors }
    }= useForm();

    

    const { user } = UseAuth()

    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const serviceCenter = useLoaderData();
    const regionDuplicate = serviceCenter.map(c => c.region);
    const regions =[...new Set(regionDuplicate)];
    const senderRegion = useWatch({ control, name:'senderRegion'});
    const reciverRegion = useWatch({ control, name: 'reciverRegion'})

    const districtsByRegion = (region) =>{
        const regionDistricts = serviceCenter.filter (c => c.region === region);
        const districts = regionDistricts.map(d => d.district);
        return districts;
    }

    

    const handleSendParcel = data =>{
        const isDocument = data. parcelType === 'document';
        const isSameDistrict = data.senderDistrict === data.reciverDistrict;
        const parcelWeight = parseFloat(data.parcelWeight)

        let cost = 0;
        if(isDocument){
            cost = isSameDistrict ? 60 : 80;
        }
        else{
            if(parcelWeight < 3 ){
                cost = isSameDistrict ? 110 : 180;
            }
            else{
                const mainCharge = isSameDistrict ? 110 : 180;
                const extraWeight = parcelWeight - 3;
                const extraCharge = isSameDistrict ? extraWeight * 40 :
                extraWeight * 40 + 40;

                cost = mainCharge + extraCharge;
            }
        }
        console.log('cost', cost);
        data.cost = cost;

        Swal.fire({
  title: "Aggree with the cost?",
  text: `You will be charged ${cost} taka!`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Confirm it!"
}).then((result) => {
  if (result.isConfirmed) {

    //save the parcel info to the database 
axiosSecure.post('/parcels', data)
.then(res =>{
    console.log('after saving parcel', res.data)
    if (res.data.insertedId){
navigate('/dashboard/my-parcels')
  
    Swal.fire({
      position: "top-end",
    icon: "success",
    title: "Parcel has created, Please Pay",
    showConfirmButton: false,
    timer:2500

  });
}
})




  }

});
    
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
          <input type="text" {...register('senderName')} className="input w-full" defaultValue={user?.displayName} placeholder="Sender Name" />

          {/* Sender Email */}
           <label className="label text-black mt-4">Sender Email</label>
          <input type="email" {...register('senderEmail')} className="input w-full" defaultValue={user?.email} placeholder="Sender Email" />
            
            {/* sender region */}
        <fieldset className="fieldset">
  <legend className="fieldset-legend">Region</legend>
  <select {...register('senderRegion')} defaultValue="Pick a region" className="select">
    <option disabled={true}>Pick a Region</option>
   {
    regions.map((r, i) => <option key={i} value={r}>{r}</option>)
   }
  </select>
</fieldset>


 {/* sender districts */}
        <fieldset className="fieldset">
  <legend className="fieldset-legend">District</legend>
  <select {...register('senderDistrict')} defaultValue="Pick a Distict" className="select">
    <option disabled={true}>Pick a District</option>
   {
    districtsByRegion(senderRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
   }
  </select>
</fieldset>




         {/* Sender Distict
          <label className="label text-black mt-4">Sender District</label>
          <input type="text" {...register('senderDistrict')} className="input w-full" placeholder="Sender District" /> */}

          {/* Sender Address */}
           <label className="label text-black mt-4">Sender Address</label>
          <input type="text" {...register('senderAddress')} className="input w-full" placeholder="Sender Address" />

        {/* Sender phone number */}
          <label className="label text-black mt-4">Sender Phone Number</label>
          <input type="number" {...register('senderPhoneNumber')} className="input w-full" placeholder="Sender Phone Number" />

       
        
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

            {/* Riciver Email */}
           <label className="label text-black mt-4">Reciver Email</label>
          <input type="email" {...register('reciverEmail')} className="input w-full" placeholder="Reciver Email" />

         {/* Reciver region */}
        <fieldset className="fieldset">
  <legend className="fieldset-legend">Region</legend>
  <select {...register('reciverRegion')} defaultValue="Pick a region" className="select">
    <option disabled={true}>Pick a Region</option>
   {
    regions.map((r, i) => <option key={i} value={r}>{r}</option>)
   }
  </select>
</fieldset>

{/* Reciver district */}
        <fieldset className="fieldset">
  <legend className="fieldset-legend">District</legend>
  <select {...register('reciverDistrict')} defaultValue="Pick a district" className="select">
    <option disabled={true}>Pick a District</option>
   {
    districtsByRegion(reciverRegion).map((d, i)=> <option key={i} value={d}>{d}</option>)
   }
  </select>
</fieldset>
        
          {/* Reciver Address */}
           <label className="label text-black mt-4">Reciver Address</label>
          <input type="text" {...register('reciverAddress')} className="input w-full" placeholder="Reciver Address" />

        {/* Reciver phone number */}
          <label className="label text-black mt-4">Reciver Phone Number</label>
          <input type="number" {...register('reciverPhoneNumber')} className="input w-full" placeholder="Reciver Phone Number" />

      
        
        {/* PickUp point */}
         <label className="label text-black mt-4">Delivary Point</label>
          <input type="text" {...register('delivaryPoint')} className="input w-full" placeholder="Delivary point" />
        
        </fieldset>
             </div>

            <input type="submit" className='btn btn-primary mt-8 text-black' value="Send Parcel" />
            </form>
        </div>
    );
};

export default SendParcel;

 