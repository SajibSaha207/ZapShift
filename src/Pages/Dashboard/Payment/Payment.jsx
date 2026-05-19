import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../hocks/useAxiosSecure';
import {  useQuery } from '@tanstack/react-query';

const Payment = () => {

    const { parcelId } = useParams();
    const axiosSecure = useAxiosSecure();

    const { isLoading, data: parcel} = useQuery({
        queryKey: ['parcels', parcelId],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/parcels/${parcelId}`);
            return res.data;
        }
    })

    const handlePayment = async () =>{
        const paymentInfo ={
            cost: parcel.cost,
            parcelId: parcel._id,
            senderEmail: parcel.senderEmail,
            parcelName: parcel.parcelName
        }
        const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
        console.log(res.data)
        window.location.href = res.data.url;
    }

    if (isLoading){
    return <div className='text-center'>
        <span className="loading loading-spinner text-error"></span>
    </div>
    }
    return (
        <div>
            <h2>Please pay ${parcel.cost}: {parcel.parcelName}</h2>
            <button onClick={handlePayment} className='btn btn-primary  text-black'>Pay Now</button>
        </div>
    );
};

export default Payment;