import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
  // const [buyersRoles,setBuyersRoles]=useState('')
  const { data: buyersRoles = [], isLoading, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('https://assaingment-twelve-server.vercel.app/users?role=Buyers')
      .then(res => res.json())

  })
  console.log(buyersRoles)
  if (isLoading) {
    return <p>Loading</p>
  }
  const HandleDelete = id => {
    if (id) {
      alert(' delete this user?')
      fetch(`https://assaingment-twelve-server.vercel.app/allSellers/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          refetch()
          toast.success('item deleted successfully')
        })
    }
  }
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            buyersRoles.map(roles => <tr key={roles._id}>
              <td>{roles.name}</td>
              <td>{roles.email}</td>
              <td>{roles.role}</td>
              <button onClick={() => HandleDelete(roles._id)} className='btn bg-red-600'>Delete</button>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllBuyers;