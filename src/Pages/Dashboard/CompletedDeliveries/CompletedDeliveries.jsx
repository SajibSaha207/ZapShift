import React from 'react';
import UseAuth from '../../../hocks/UseAuth';
import useAxiosSecure from '../../../hocks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const CompletedDeliveries = () => {

    const { user } = UseAuth();
    const axiosSecure = useAxiosSecure();

    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['parcels', user.email, 'Rider_assigned'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user.email}&deliveryStatus=parcel_delivered`)

            return res.data;
        }
    })

    const calculatePayout = parcel =>{
        if (parcel.senderDistrict === parcel.receiverDistrict){
            return parcel.cost * 0.8
        }
        else{
            return parcel.cost * 0.6
        }
    }
    return (
        <div>
            <h2 className="text-4xl">Completed Deliveries: {parcels.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Created At</th>
                            <th>Pickup District</th>
                            <th>Payout Cost</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parcels.map((parcel, index) => <tr key={parcel._id}>
                            <th>{index + 1}</th>
                            <td>{parcel.parcelName}</td>
                            <td>{parcel.cost}</td>
                            <td>{parcel.createdAt}</td>
                            <td>{parcel.senderDistrict}</td>
                            <td>{calculatePayout(parcel)}</td>
                            <td>
                                <button
                                    // onClick={() => openAssignRiderModal(parcel)}
                                    className='btn btn-primary text-black'>Cash Out</button>
                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompletedDeliveries;