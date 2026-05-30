import React from 'react';
import useAxiosSecure from '../../../hocks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaUserShield } from 'react-icons/fa';
import { FiShieldOff } from 'react-icons/fi';
import Swal from 'sweetalert2';

const UserManagement = () => {

const axiosSecure  = useAxiosSecure();

const { refetch, data: users = []} = useQuery({
    queryKey: ['users'],
    queryFn: async()=>{
        const res = await axiosSecure.get('/users');
        return res.data;
    }
})

const handleMakeUser = user =>{
    const roleInfo = {role : 'admin'}
    axiosSecure.patch(`/users/${user._id}`, roleInfo)
    .then(res =>{
        if (res.data.modifiedCount){
            refetch()
            Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: `${user.displayName} marked as an admin`,
                      showConfirmButton: false,
                      timer: 1500
                    });
        }
    })
}


const handleRemoveAdmin = user =>{
    const roleInfo = {role: 'user'}
    axiosSecure.patch(`/users/${user._id}`, roleInfo)
    .then(res =>{
        if (res.data.modifiedCount){
            refetch()
             Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: `${user.displayName} marked as an admin`,
                      showConfirmButton: false,
                      timer: 1500
                    });
        }
    })
}
    return (
        <div>
            <h3 className="text-4xl">Users : {users.length}</h3>
            <div class="overflow-x-auto">
  <table class="table">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Admin Action</th>
        <th>Other Action</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index)=>
        <tr>
        <th>
          {
            index + 1
          }
        </th>
        <td>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle h-12 w-12">
                <img
                  src={user.photoURL}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">{user.displayName}</div>
              
            </div>
          </div>
        </td>
        <td>
         {user.email}
        </td>
        <td>
         {user.role}
        </td>
          <td>
            {
                user.role === 'admin' ? <button onClick={() =>handleRemoveAdmin(user) } className='btn bg-red-400'><FiShieldOff></FiShieldOff></button> : <button onClick={()=> handleMakeUser(user)} className='btn bg-green-400'><FaUserShield></FaUserShield></button>
            }
         
         
        </td>
        <td>Admin</td>
        <th>
          <button class="btn btn-ghost btn-xs">Actions</button>
        </th>
      </tr>
      )}
      
        </tbody>
  </table>
</div>
        </div>
    );
};

export default UserManagement;