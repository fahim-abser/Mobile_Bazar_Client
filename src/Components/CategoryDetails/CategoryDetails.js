import { async, getDefaultAppConfig } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import BrandCategor from '../BrandCategor/BrandCategor';
import axios from 'axios';

const CategoryDetails = () => {
    const { id } = useParams();
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        await axios.get("https://server-liart-five.vercel.app/allcategory")
            .then(res => setCategories(res.data)).catch(error => { })
    }

    return (
        <div>{categories[0] != undefined ? (
            <div>
                {categories.map((element) => {
                    let brand_name = element.brand;
                    if (brand_name === id) {
                        let BrandElem = element;
                        return <BrandCategor category={BrandElem} />;
                    }
                })}
            </div>
        ) : (
            <div></div>
        )}


        </div >
    );
};

export default CategoryDetails;