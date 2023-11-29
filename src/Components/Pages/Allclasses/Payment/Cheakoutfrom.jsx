import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Authcontext } from '../../../Provaider/Authprovider';
import Swal from 'sweetalert2';

const Cheakoutfrom = ({ enrollclass }) => {
    const { user } = useContext(Authcontext)
    const axiospublic = useAxiosPublic();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiospublic.get('/users')
            return res.data;
        },
    })
    const currentuser = users.find(item => item.email == user.email)

    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('payment error', error)
            setError(error?.message)
        }
        if (paymentMethod) {
            console.log('payment method', paymentMethod)
            if (paymentMethod.created) {
                const classinfo = {
                    studentname: currentuser.name,
                    studentimage: currentuser.image,
                    studnetemail: currentuser.email,
                    img: enrollclass.img,
                    name: enrollclass.name,
                    price: enrollclass.price,
                    shortDescription: enrollclass.shortDescription,
                    totalEnrolment: enrollclass.totalEnrolment
                }
                const id = {
                    id: currentuser._id
                }
                axiospublic.post(`/users/student`, id)
                    .then(res => {
                        console.log(res.data)
                    })
                axiospublic.post('/enrolclass', classinfo)
                    .then(res => {
                        console.log(res.data)
                        if (res.data) {
                            Swal.fire({
                                title: "Payment!",
                                text: `${classinfo.name} is enrolled`,
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
            setError('')
        }
    }
    return (
        <div className=' mt-10'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className=" btn btn-secondary mt-2" disabled={!stripe}>
                    Pay
                </button>
                <p className=" text-red-400 ">{error}</p>
            </form>
        </div>
    );
};

export default Cheakoutfrom;