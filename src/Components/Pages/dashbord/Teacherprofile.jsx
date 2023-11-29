import React, { useContext } from 'react';
import Title from '../../Shared/Title';
import { Authcontext } from '../../Provaider/Authprovider';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';


const Teacherprofile = () => {
    const { user } = useContext(Authcontext)
    const axiospublic = useAxiosPublic()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiospublic.get('/users')
            return res.data;
        },
    })

    const currentuser = users.find(item => item.email == user?.email)

    return (
        <div>
            <Title
                Subheading={'Teacher profile'}
                heading={'Your profile is here'}
            ></Title>
            <div className=" lg:w-1/2 lg:mx-auto w-full">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={user?.photoURL} alt="" /></figure>
                    <div className=" space-y-2">
                        <h2 className=" text-2xl font-bold font-rubik">Name: {user?.displayName}</h2>
                        <p className=" text-xl font-bold">Role: {currentuser?.role}</p>
                        <p className=" font-bold">Email: {user?.email}</p>
                        <p className=" font-bold">Phone: 01755463590</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teacherprofile;