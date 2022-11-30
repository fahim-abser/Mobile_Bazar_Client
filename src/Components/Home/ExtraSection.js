import React from 'react';

const ExtraSection = () => {
    return (
        <div>
        <h3 className='text-center text-orange-600 text-4xl m-8'>Facilities</h3>
        <div className='flex gap-4 px-4 p-4'>
            
            <div className="card w-96 bg-base-200 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-orange-600">SUPPORT 24/7</h2>
                    <p>Contact us 24 hours, 7 days a week.</p>
                </div>
            </div>
            <div className="card w-96 bg-base-200 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-orange-600">30 DAYS RETURN</h2>
                    <p>Single return it within 30 days for an exchange.</p>
                </div>
            </div>
            <div className="card w-96 bg-base-200 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-orange-600">FREE SHIPPING</h2>
                    <p>Free shipping on order above 20k.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ExtraSection;