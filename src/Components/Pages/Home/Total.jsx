import { useQuery } from "@tanstack/react-query";
import Title from "../../Shared/Title";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import totalimg from '../../../assets/totalpic.png'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

const Total = () => {
    const axiospublic = useAxiosPublic();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiospublic.get('/users')
            return res.data;
        },
    })

    const student = users.filter(item => item.role == 'student')

    const { data: classes = [], } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiospublic.get('/class')
            return res.data;
        }
    })

    useEffect(() => {
        AOS.init({
            duration: 700,
            offset: 200
        });
    }, []);


    return (
        <div>
            <Title
                heading={'Our total count'}
                Subheading={'our total count is here'}
            >
            </Title>
            <div className=" justify-center items-center text-white flex md:flex-row flex-col my-10">
                <div data-aos="fade-right" className=" w-1/2 mx-auto">
                    <div className="card w-5/6 mx-auto px-4 py-4 bg-gray-800 shadow-xl items-center">
                        <h3 className=" text-4xl font-bold font-rubik">Total count</h3>
                        <h2 className=" text-2xl font-bold font-rancho">Total users: {users?.length}</h2>
                        <h2 className=" text-2xl font-bold font-rancho">Total enrolment: {student?.length}</h2>
                        <h2 className=" text-2xl font-bold font-rancho">Total class: {classes?.length}</h2>
                    </div>
                </div>
                <div data-aos="fade-left" className=" w-1/2 mx-auto">
                    <img className=" rounded-lg" src={totalimg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Total;