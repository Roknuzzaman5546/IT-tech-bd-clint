import React from 'react';
import Banner from './Banner';
import Partnership from './Partnership';
import FeedbackCarousel from './FeedbackCarousel ';
import Classcours from './Classcours';
import Teaching from './Teaching';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Partnership></Partnership> 
           <Classcours></Classcours>
           <FeedbackCarousel></FeedbackCarousel>
           <Teaching></Teaching>
        </div>
    );
};

export default Home;