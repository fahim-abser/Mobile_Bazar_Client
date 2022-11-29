import React from 'react';

const ExtraSection = () => {
    return (

        <div className='flex px-4 p-4'>
            <div className="card w-96 bg-base-200 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">SUPPORT 24/7</h2>
                    <p>Contact us 24 hours, 7 das a week.</p>
                </div>
            </div>
            <div className="card w-96 bg-base-200 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">30 DAS RETURN</h2>
                    <p>Single return it within 24 das for an exchange.</p>
                </div>
            </div>
            <div className="card w-96 bg-base-200 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">FREE SHIPPING</h2>
                    <p>Free shipping on all order or order above 10k</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;