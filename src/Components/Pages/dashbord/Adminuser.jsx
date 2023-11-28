import { useContext } from "react";
import Title from "../../Shared/Title";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Authcontext } from "../../Provaider/Authprovider";
import Swal from "sweetalert2";

const Adminuser = () => {
    const { user } = useContext(Authcontext);
    const axiospublic = useAxiosPublic();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiospublic.get('/users')
            return res.data;
        },
    })

    const handleMakeadmin = item => {
        console.log('admin related', item)
        axiospublic.patch(`/users/${item._id}`)
            .then(res => {
                console.log(res.data)
                refetch();
                Swal.fire({
                    title: "Updated!",
                    text: `${item._id} is Admin updated`,
                    icon: "success"
                });
                refetch();
            })
    }
 


    return (
        <div>
            <Title
                heading={'users'}
                Subheading={'Al user are here'}
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
                                <th>Email</th>
                                <th>Make admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((item, index) => <tr key={item._id}>
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
                                    <td>{item.email}</td>
                                    <th>
                                        {item.role == 'admin' ? <button className="btn btn-ghost btn-xs">{item.role}</button> :
                                            <button onClick={() => handleMakeadmin(item)} className="btn btn-ghost btn-xs">{item.role}</button>}
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

export default Adminuser;