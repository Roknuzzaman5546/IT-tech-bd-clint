import Title from "../../Shared/Title";
import useTeacherreq from "./useTeacherreq";
import { TiTick } from "react-icons/ti";


const Teacherrequest = () => {
    const [teacherreq, refetch] = useTeacherreq();
    console.log(teacherreq)

    const handlerejected = () => {
        console.log('reject btn')
        
    }

    const handleapprove = () =>{
        console.log('this is approve btn')
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
                                        <button className="btn btn-ghost btn-xs">Panding</button>
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