import Swal from "sweetalert2";
import Title from "../../Shared/Title";
import useTeacherreq from "./useTeacherreq";
import { TiTick } from "react-icons/ti";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";



const Teacherrequest = () => {
    const [pending, setpending] = useState(false);
    const axiospublic = useAxiosPublic();
    const [teacherreq, refetch] = useTeacherreq();
    console.log(teacherreq)

    const handlerejected = () => {
        console.log('reject btn')
    }

    const handleapprove = (item) => {
        console.log('this is approve btn', item.email)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to teacher this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Approve it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const email = {
                    email: item.email
                }
                axiospublic.post('/users/teacher', email)
                    .then(res => {
                        console.log(res.data)
                        refetch();
                        Swal.fire({
                            title: "Updated!",
                            text: `${item._id} is teacher updated`,
                            icon: "success"
                        });
                        refetch();
                    })
                setpending(true)
            }
        });
    }

    return (
        <div className=" lg:ml-5 ml-0">
            <Title
                heading={'Teacher request'}
                Subheading={'Theacher request is all here'}
            ></Title>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="">
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Experience</th>
                                <th>Cetagory</th>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Reject</th>
                                <th>Approved</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                teacherreq.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.experience}</td>
                                    <td>{item.category}</td>
                                    <td>{item.title}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">{pending ? 'Approvs' : 'Pending'}</button>
                                    </th>
                                    <th>
                                        <button className="btn btn-square" onClick={() => handlerejected(item)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </th>
                                    <th>
                                        <button className="btn btn-ghost btn-square" onClick={() => handleapprove(item)}><TiTick className=" text-xl"></TiTick>
                                        </button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Teacherrequest;