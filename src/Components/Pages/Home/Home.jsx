import React from 'react';
import Banner from './Banner';
import Partnership from './Partnership';
import Classcours from './Classcours';
import Teaching from './Teaching';
import { Helmet } from 'react-helmet';
import Total from './Total';
import ItShow from './ItShow';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>IT tech home</title>
            </Helmet>
            <Banner></Banner>
            <div className="md:max-w-screen-2xl w-11/12 mx-auto overflow-hidden">
                <Partnership></Partnership>
                <Classcours></Classcours> 
                <Total></Total>
                <ItShow></ItShow>
                <Teaching></Teaching>
            </div>
        </div>
    );
};

export default Home;