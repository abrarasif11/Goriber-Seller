import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AllUser = () => {
    const url = `https://server-assignment-12-omega.vercel.app/usersList`;
    const [displayUser, setDisplayUser] = useState();

    const { data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    const handleMakeAdmin = _id => {
        fetch(`https://server-assignment-12-omega.vercel.app/usersList/admin/${_id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successfully')
                    refetch();
                }
            })
    }
    const handleDeleteUser = _id => {
        fetch(`https://server-assignment-12-omega.vercel.app/usersList/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    console.log(data.deletedCount);
                    toast.success("User Deleted Successfully")
                    const remainingUsers = displayUser.filter(usr => usr._id !== _id);
                    refetch();
                    setDisplayUser(remainingUsers);
                }
            })
    }
    return (
        <div>
            <h1 className='text-3xl font-bold mb-5 mt-10 bg-black text-orange-600 w-fit px-2 py-2 ml-4'>All Sellers</h1>
            <div className="overflow-x-auto bg-black">
                <table className="table w-full bg-black">
                    <thead>
                        <tr className='bg-black'>
                            <th className=''></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            users.map((user, i) =>
                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td className='text-green-700'>{user.name}</td>
                                    <td className='text-green-700'>{user.email}</td>
                                    <td className='text-green-700'>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='rounded px-2 py-1 text-black bg-orange-600  btn-xs'>Make Admin</button>}</td>
                                    <td>{user?.role !== 'admin' && <button onClick={() => handleDeleteUser(user._id)} className='bg-red-700 rounded text-white px-2'>Delete</button>}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;