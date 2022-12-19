import React from 'react';
import { Link } from 'react-router-dom';

const Catagory = ({catagory}) => {
    const {brand,img,category_id}=catagory;
    return (
        <div className="card card-compact mt-10 bg-base-100 shadow-xl">
  <figure className='h-56' ><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{brand}</h2>
    <div className="card-actions justify-end">
      <Link to={`/catagories/${category_id}`}><button className="btn btn-primary">Details </button></Link>
    </div>
  </div>
</div>
    );
};

export default Catagory;