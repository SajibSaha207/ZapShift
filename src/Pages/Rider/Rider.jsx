import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import UseAuth from '../../hocks/UseAuth';
import useAxiosSecure from '../../hocks/useAxiosSecure';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Rider = () => {
      const {register, 
            handleSubmit, 
            control, 
            // formState:{ errors }
        }= useForm();

            const { user } = UseAuth();
        
            const axiosSecure = useAxiosSecure();
            const serviceCenter = useLoaderData();
             const regionDuplicate = serviceCenter.map(c => c.region);
                const regions =[...new Set(regionDuplicate)];
                const districtsByRegion = (region) =>{
        const regionDistricts = serviceCenter.filter (c => c.region === region);
        const districts = regionDistricts.map(d => d.district);
        return districts;
    }


                const riderRegion = useWatch({ control, name:'riderRegion'});

    const handleRiderApplication = data =>{
console.log(data);
axiosSecure.post('/riders', data)
.then(res =>{
    if (res.data.insertedId){
            Swal.fire({
              position: "top-end",
            icon: "success",
            title: "Your application has been submited",
            showConfirmButton: false,
            timer:1500
        
          });
    }
})
    }
    
    return (
        <div>
            <h2 className="text-4xl">Be a Rider</h2>

              <form onSubmit={handleSubmit(handleRiderApplication)} className='mt-12 p-4'>
            

              

             {/* two column    */}

             <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* Rider info */}
                
                <fieldset className="fieldset">
                    <h4 className="text-2xl font-semibold">Rider Details</h4>
                    {/* Rider Name */}
           <label className="label text-black"> Name</label>
          <input type="text" {...register('riderName')} className="input w-full" defaultValue={user?.displayName} placeholder="Rider Name" />

          {/* Rider Email */}
           <label className="label text-black mt-4"> Email</label>
          <input type="email" {...register('riderEmail')} className="input w-full" defaultValue={user?.email} placeholder="Rider Email" />
            
            {/* Rider region */}
        <fieldset className="fieldset">
  <legend className="fieldset-legend">Region</legend>
  <select {...register('riderRegion')} defaultValue="Pick a region" className="select">
    <option disabled={true}>Pick a Region</option>
   {
    regions.map((r, i) => <option key={i} value={r}>{r}</option>)
   }
  </select>
</fieldset>


 {/* Rider districts */}
        <fieldset className="fieldset">
  <legend className="fieldset-legend">District</legend>
  <select {...register('District')} defaultValue="Pick a Distict" className="select">
    <option disabled={true}>Pick a District</option>
   {
    districtsByRegion(riderRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
   }
  </select>
</fieldset>




      
          {/* Rider Address */}
           <label className="label text-black mt-4">Address</label>
          <input type="text" {...register('riderAddress')} className="input w-full" placeholder="Rider Address" />

        {/* Rider phone number */}
          <label className="label text-black mt-4"> Phone Number</label>
          <input type="number" {...register('riderPhoneNumber')} className="input w-full" placeholder="Rider Phone Number" />
        
        </fieldset>

        {/* More info */}

             <fieldset className="fieldset">
                <h4 className="text-2xl font-semibold">More Details</h4>
                    {/* Rider linsences */}
           <label className="label text-black">Driving Lisences No</label>
          <input type="text" {...register('lisences')} className="input w-full" placeholder="Driving Lisences No" />

            {/* Rider Nid */}
           <label className="label text-black mt-4">NID Number</label>
          <input type="number" {...register('nid')} className="input w-full" placeholder="NID Number" />


      
        
        
         <label className="label text-black mt-4">Bike Reg. No</label>
          <input type="text" {...register('bike')} className="input w-full" placeholder="Bike Reg. No" />
        
        </fieldset>
             </div>

            <input type="submit" className='btn btn-primary mt-8 text-black' value="Apply As a Rider" />
            </form>
        </div>
    );
};

export default Rider;