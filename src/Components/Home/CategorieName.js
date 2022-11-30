import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const CatagoryName = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://server-liart-five.vercel.app/allcategory')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
                <div className='flex gap-4'>
                {
                    categories.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                        ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default CatagoryName;

