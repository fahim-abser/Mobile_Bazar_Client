import React, { useContext } from 'react';
import { authContext } from '../../../Auth/AuthProvider';

const SecondHandCatagories = ({ catagory, setBikeBooking }) => {
    const { name, img, used, price, newPrice, location } = catagory
    console.log(img);
    const { user } = useContext(authContext)
    return (
        <div className="card my-10 w-96 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <div className='flex gap-2'>
                    <img className='rounded-full w-10' src={user.photoURL} alt="" />
                    {user.displayName}
                </div>
                <div className='flex gap-2 items-center'>
                    <h2 className="card-title text-2xl">{name}</h2>
                </div>
                <p className='flex font-bold'>Location: {location}</p>
                <p className='flex font-bold'>Selling Price: {price} tk</p>
                <p className=''>Market Price: {newPrice} tk</p>
                <p className='flex font-bold'>Used: {used} Month</p>

                <div className="card-actions">
                    <label onClick={() => setBikeBooking(catagory)} htmlFor="booking-modal" className="btn btn-primary">Book now</label>
                </div>
            </div>
        </div>
    );
};

export default SecondHandCatagories;