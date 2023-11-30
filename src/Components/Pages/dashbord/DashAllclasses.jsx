import React, { useContext, useState } from 'react';
import Title from '../../Shared/Title';
import useAxiosSecuire from '../../hooks/useAxiosSecuire';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Dashallclasses = () => {
    const axiossecure = useAxiosSecuire();

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiossecure.get('/classrequest')
            return res.data;
        }
    })

    const handlerejected = (cours) => {
        console.log('rejected')
        const id = {
            id: cours._id
        }
        axiossecure.post('/classrequest/rejected', id)
            .then(res => {
                if (res.data) {
                    Swal.fire({
                        title: "Rejected!",
                        text: `${cours.name} is class rejcted`,
                        icon: "success"
                    });
                }
            })
        refetch()
    }


    const hadnleapprove = (cours) => {
        console.log('this is cours')
        const id = {
            id: cours._id
        }
        const newclass = {
            name: cours.name,
            title: cours.title,
            img: cours.img,
            price: cours.price,
            totalEnrolment: cours.totalEnrolment,
            shortDescription: cours.shortDescription
        }
        axiossecure.post('/classrequest/approve', id)
            .then(res => {
                if (res.data) {
                    axiossecure.post('/class', newclass)
                    Swal.fire({
                        title: "Approved and Add classes!",
                        text: `${cours.name} is class accepted`,
                        icon: "success"
                    });
                }
            })
        refetch()
    }

    return (
        <div>
            <Title
                heading={'This is all aclasses'}
                Subheading={'This is all requested class'}
            >
            </Title>
            <div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
                {
                    classes.map(cours => <div key={cours._id} className="card bg-base-100 shadow-2xl">
                        <div>
                            <img className=" h-48 relative" src={cours.img} alt="Shoes" />
                            <div className="absolute bottom-0 top-10 left-56">
                                <p className="bg-gray-700 text-white p-1 rounded-md">$ {cours.price}</p>
                            </div>
                        </div>
                        <div className="mt-5 space-y-2 flex-col items-center">
                            <h2 className=" text-2xl font-bold">{cours.name}</h2>
                            <p>{cours.title}</p>
                            <p>Status: {cours.status}</p>
                            <p>Total enroll: {cours.totalEnrolment}</p>
                        </div>
                        <div className=" space-x-2 mt-2">
                            <button onClick={() => hadnleapprove(cours)} className=" btn btn-xl btn-neutral">Approve</button>
                            {cours.status == 'accepted' ? <Link to={`/dashbord/dashclass/${cours._id}`}><button className=" btn btn-neutral">See progress</button></Link> : <button disabled className=" btn btn-neutral">See progress</button>}
                            <button onClick={() => handlerejected(cours)} className=" btn btn-xl btn-neutral">Reject</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Dashallclasses;