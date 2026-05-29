import React from 'react';
import useAxiosSecure from '../../../hocks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UserManagement = () => {

const axiosSecure  = useAxiosSecure();

const { data: users = []} = useQuery({
    queryKey: ['users'],
    queryFn: async()=>{
        const res = await axiosSecure.get('/users');
        return res.data;
    }
})

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
        <th>Favorite Color</th>
        <th></th>
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
        <td>Purple</td>
        <th>
          <button class="btn btn-ghost btn-xs">details</button>
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