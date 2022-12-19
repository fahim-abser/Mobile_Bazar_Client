import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../SecondHandCatagories/BookingModal/BookingModal';
import SecondHandCatagories from '../SecondHandCatagories/SecondHandCatagories';

const CatagoryDetails = () => {
    const catagories = useLoaderData();
    const [bikeBooking, setBikeBooking] = useState(null)
    return (
        <div>

            <div className='mt-10 grid place-items-center grid-cols-1'>
                {
                    catagories && catagories.map(catagory => <SecondHandCatagories key={catagory._id} catagory={catagory} setBikeBooking={setBikeBooking}></SecondHandCatagories>)
                }
            </div>
            {
                bikeBooking &&
                <BookingModal setBikeBooking={setBikeBooking} bikeBooking={bikeBooking}></BookingModal>
            }
        </div>
    );
};

export default CatagoryDetails;