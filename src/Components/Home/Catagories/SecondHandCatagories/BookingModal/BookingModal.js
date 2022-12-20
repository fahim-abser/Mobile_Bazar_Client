import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../../../Auth/AuthProvider';

const BookingModal = ({ bikeBooking, setBikeBooking }) => {
    const { name, price } = bikeBooking;
    const { user } = useContext(authContext);

    const HandleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const userName = form.userName.value;
        const email = form.email.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const meetingLocation = form.meetingLocation.value;

        const bookings = {
            userName,
            email,
            price,
            phone,
            meetingLocation
        }
        console.log(bookings);
        fetch('https://assaingment-twelve-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setBikeBooking(null)
                    toast.success('item is Booked')
                }

            })




    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Model Name: {name}</h3>
                    <form onSubmit={HandleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                        <input name='userName' type="text" placeholder="Type here" className="input w-full input-bordered" disabled value={user.displayName} />
                        <input name='email' type="text" placeholder="Type here" className="input w-full input-bordered" disabled value={user.email} />

                        <input name='price' type="text" disabled placeholder="Type here" className="input w-full input-bordered" value={`${price} taka`} />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" required />
                        <input name='meetingLocation' type="text" placeholder=" Location" className="input w-full input-bordered" required />
                        <br />
                        <input className='w-full btn btn-primary' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;