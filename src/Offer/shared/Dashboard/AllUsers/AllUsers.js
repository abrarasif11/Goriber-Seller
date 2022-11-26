import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [] , refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/usersList');
            const data = await res.json();
            return data;
        }
    })
    const handleAdmin = id => {
        fetch(`http://localhost:5000/usersList/admin/${id}`, {
            method: 'PUT',
        })
        .then(res => res.json())
        .then(data => {
            // refetch part //
          if(data.modifiedCount > 0){
            toast.success('Make Admin Successfully')
            refetch();
          }
        })
    }
    return (
        <div>
            <h3 className='text-3xl'>All Users</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>
                                <tr key={user._id}>
                                    <th>{i+1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{ user?.role !== 'admin' &&  <button onClick={() => handleAdmin(user._id)} className='btn btn-primary text-white btn-xs'>Make Admin</button>}</td>
                                    <td><button className='btn btn-xs btn-accent text-white'>Delete</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;