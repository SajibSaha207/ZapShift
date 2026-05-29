import React from 'react';
import useAxiosSecure from '../../../hocks/useAxiosSecure';
import { useQueries, useQuery } from '@tanstack/react-query';
import { FaEye, FaTrash, FaUserCheck } from 'react-icons/fa';
import { IoPersonRemove } from 'react-icons/io5';
import Swal from 'sweetalert2';

const ApproveRiders = () => {

    const axiosSecure = useAxiosSecure();
    const {refetch, data: riders = []} = useQuery({
        queryKey: ['riders', 'pending'],
            queryFn: async ()=>{
                const res = await axiosSecure.get('/riders')
            return res.data;
            }
    })

  const updateRiderStatus = (rider, status) => {
  const updateInfo = { status: status, email:rider.riderEmail };

  axiosSecure.patch(`/rider/${rider._id}`, updateInfo)
    .then(res => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Rider has been ${status}.` ,
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
};

    const handleApproval = rider =>{
      updateRiderStatus(rider, 'approved');
    }

    const handleRejection = rider =>{
         updateRiderStatus(rider, 'rejected');
    }
    return (
        <div>
            <h2 className="text-4xl">Riders Pending Approval: {riders.length}</h2>
          <div className="overflow-x-auto">
  <table className="table table-zebra border-separate border-spacing-y-2">

    <thead>
      <tr>
        <th></th>
        <th className="px-4">Name</th>
        <th className="px-4">Email</th>
        
        <th className="px-4">District</th>
        <th className="px-4">Status</th>
        <th className="px-4">Action</th>
      </tr>
    </thead>

    <tbody>
      {
        riders.map((rider, index) => (
          <tr key={rider._id}>
            <th>{index + 1}</th>
            <td>{rider.riderName}</td>
            <td>{rider.riderEmail}</td>
            <td>{rider.District}</td>
 <td>
  <p
    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold
      ${
        rider.status === 'approved'
          ? 'bg-green-100 text-green-700'
          : 'bg-red-100 text-red-700'
      }`}
  >
    {rider.status}
  </p>
</td>
            <td>
              <button onClick={() =>  (rider)} className="btn"><FaEye></FaEye></button>
                <button onClick={() => handleApproval(rider)} className="btn"><FaUserCheck></FaUserCheck></button>
                <button onClick={()=> handleRejection(rider)} className="btn"><IoPersonRemove></IoPersonRemove></button>
                <button className="btn"><FaTrash></FaTrash></button>
            </td>
          </tr>
        ))
      }
    </tbody>

  </table>
</div>
        </div>
    );
};

export default ApproveRiders;