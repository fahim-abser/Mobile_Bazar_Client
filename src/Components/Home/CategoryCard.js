import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    const { name,img} = category;
    return (
        <div>
            <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure className='h-56'><img  src={img} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="text-4xl card-title text-orange-600">{name}</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                    <Link to={`/category/${category._id}`}><  button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
        </div>
    );
};

export default CategoryCard;