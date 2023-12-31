import React from 'react';
import Banner from './Banner';
import Partnership from './Partnership';
import Classcours from './Classcours';
import Teaching from './Teaching';
import { Helmet } from 'react-helmet';
import Total from './Total';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>IT tech home</title>
            </Helmet>
            <Banner></Banner>
            <div className="w-11/12 mx-auto">
                <Partnership></Partnership>
                <Classcours></Classcours>
                <Total></Total>
                <Teaching></Teaching>
            </div>
        </div>
    );
};

export default Home;