import { useQuery } from "@tanstack/react-query";
import Title from "../../Shared/Title";
import useAxiosSecuire from "../../hooks/useAxiosSecuire";
import { useContext } from "react";
import { Authcontext } from "../../Provaider/Authprovider";

const Studentenrollclass = () => {
    const { user } = useContext(Authcontext)
    const axiossecure = useAxiosSecuire();
    const { data: classes = [], } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiossecure.get('/enrolclass')
            return res.data;
        }
    })

    const enrolclass = classes.filter(item => item.studnetemail === user?.email)
    return (
        <div className=" w-10/12 mx-auto">
            <Title
                Subheading={'Your enroll calss if that you enroll'}
                heading={'enroll class'}
            ></Title>
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
                            <p>Total enroll: {cours.totalEnrolment}</p>
                            <button className=" btn btn-secondary">Continue</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Studentenrollclass;