import React from 'react';

const CategoryDetails = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl p-20">
            <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl text-orange-600">Name</h2>
                <h5>Used</h5>
                <h5>Condition:</h5>
                <p>Price:</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;