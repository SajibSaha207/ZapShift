import React, { useState } from 'react';
import useAxiosSecure from '../../../hocks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaUserShield } from 'react-icons/fa';
import { FiShieldOff } from 'react-icons/fi';
import Swal from 'sweetalert2';

const UserManagement = () => {

    const axiosSecure = useAxiosSecure();

    //search
    const [searchText, setSearchText] = useState('');

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users', searchText],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?searchText=${searchText}`);
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        const roleInfo = { role: 'admin' }
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
            .then(res => {
                if (res.data.modifiedCount) {
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


    const handleRemoveAdmin = user => {
        const roleInfo = { role: 'user' }
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
            .then(res => {
                if (res.data.modifiedCount) {
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

const highlightText = (text, search) => {
    if (!search || !text) return text;
    
    const parts = text.split(new RegExp(`(${search})`, 'gi'));
    return parts.map((part, index) =>
        part.toLowerCase() === search.toLowerCase()
            ? <span key={index} className="bg-yellow-200 text-black font-bold">{part}</span>
            : part
    );
}

    return (
        <div>
            <h3 className="text-4xl">Users : {users.length}</h3>

            {/* Search */}
            <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input
                onChange={(e) => setSearchText(e.target.value)}
                 type="search" required placeholder="Search" />
            </label>

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
                        {users.map((user, index) =>
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
                                            <div class="font-bold"><td>{highlightText(user.displayName, searchText)}</td></div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                     <div class="font-bold"><td>{highlightText(user.email, searchText)}</td></div>
                                    {/* {user.email} */}
                                </td>
                                <td>
                                    {user.role}
                                </td>
                                <td>
                                    {
                                        user.role === 'admin' ? <button onClick={() => handleRemoveAdmin(user)} className='btn bg-red-400'><FiShieldOff></FiShieldOff></button> : <button onClick={() => handleMakeAdmin(user)} className='btn bg-green-400'><FaUserShield></FaUserShield></button>
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