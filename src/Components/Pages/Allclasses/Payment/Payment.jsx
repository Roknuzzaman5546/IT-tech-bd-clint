import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Cheakoutfrom from './Cheakoutfrom';
import Title from '../../../Shared/Title';
import { Elements } from '@stripe/react-stripe-js';


const stripePromis = loadStripe(import.meta.env.VITE_PAYMENT)

const Payment = () => {
    return (
        <div className=" mt-10">
            <Title
                Subheading={"Payment for enrol this class"}
                heading={"payment"}>
            </Title>
            <div>
                <Elements stripe={stripePromis}>
                    <Cheakoutfrom enrollclass={enrollclass} ></Cheakoutfrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;