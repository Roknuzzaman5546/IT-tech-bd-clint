import { useQuery } from "@tanstack/react-query";
import Title from "../../Shared/Title";
import useAxiosSecuire from "../../hooks/useAxiosSecuire";
import { useContext } from "react";
import { Authcontext } from "../../Provaider/Authprovider";
import { FaTrash } from "react-icons/fa6";

const Teachermyclass = () => {
    const { user } = useContext(Authcontext)
    const axiossecure = useAxiosSecuire();
    const { data: classes = [], } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiossecure.get('/classrequest')
            return res.data;
        }
    })
    console.log(classes)
    const enrolclass = classes.filter(item => item.email === user?.email)
    console.log(enrolclass)

    return (
        <div>
            <Title
                Subheading={'Your all class is here include'}
                heading={'MY class'}
            >
            </Title>
            <div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
                {
                    enrolclass.map(cours => <div key={cours._id} className="card bg-base-100 shadow-2xl">
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
                            <button className=" btn btn-xl btn-neutral">See details</button>
                            <button className=" btn btn-xl"><FaTrash className=" font-bold text-red-500"></FaTrash></button>
                            <button className=" btn btn-xl btn-neutral">Upadate</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Teachermyclass;