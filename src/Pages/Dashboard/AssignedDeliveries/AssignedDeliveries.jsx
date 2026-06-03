
import React from 'react';
import UseAuth from '../../../hocks/UseAuth';
import useAxiosSecure from '../../../hocks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AssignedDeliveries = () => {

const {user} = UseAuth();
const axiosSecure = useAxiosSecure();

const {data:parcels =[]} = useQuery({
    queryKey: ['parcels', user.email, 'Rider_assigned'],
    queryFn: async() =>{
        const res = await axiosSecure.get(`/parcels/rider?.riderEmail=${user.email}&deliveryStatus=Rider_assigned`)
        return res.data;
    }
})

    return (
        <div>
            <h2 className="text-4xl">Parcels Pending Pickup: {parcels.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Confirm</th>
                            <th>Paid Time</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        parcels.map((parcel, index) => <tr key={parcel._id}>
                            <th>{index + 1}</th>
                            <td>{parcel.parcelName}</td>
                            <td className=''>
                                <button className='btn btn-primary text-black'>Accept</button>
                                 <button className='btn btn-warning text-black ms-2'>Reject</button>
                            </td>
                            <td>
                               
                            </td>
                           
                        </tr>)
                       }
                       
                     
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AssignedDeliveries;