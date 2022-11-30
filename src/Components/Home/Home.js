import React from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import AdvertisedItem from './AdvertisedItem';
import Banner from './Banner';
import CatagoryName from './CategorieName';
import ExtraSection from './ExtraSection';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <AdvertisedItem></AdvertisedItem>
            <CatagoryName></CatagoryName>
            <ExtraSection></ExtraSection>
            <CategoryDetails></CategoryDetails>
        </div>
    );
};

export default Home;