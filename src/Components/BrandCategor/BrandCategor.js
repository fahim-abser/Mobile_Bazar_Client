import React from 'react';

const BrandCategor = ({ category }) => {
    const { brand, img, name, price, author, location } = category;
    return (
        <div>

            <div className="card lg:card-side bg-base-100 shadow-xl p-20">
                <figure className='h-80 w-80'><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl text-orange-600">{brand}</h2>
                    <h5>Model Name: {name}</h5>
                    <h5>Condition:</h5>
                    <p>Price: {price} Taka</p>
                    <p>Location: {location}</p>
                    <p>Purchase year:</p>
                    <p>Author: {author}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandCategor;