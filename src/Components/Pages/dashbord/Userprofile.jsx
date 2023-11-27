import { useContext } from "react";
import Title from "../../Shared/Title";
import { Authcontext } from "../../Provaider/Authprovider";

const Userprofile = () => {
    const { user } = useContext(Authcontext);
    return (
        <div>
            <Title
                heading={'User profile'}
                Subheading={'This is users profile'}
            ></Title>
            <div className=" w-1/2 mx-auto">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className=" w-40 rounded-full" src={user?.photoUrl} alt="Shoes" /></figure>
                    <div className=" space-y-2">
                        <h2 className=" text-2xl font-bold font-rubik">Name: {user?.displayName}</h2>
                        <p className=" text-xl font-bold">Role: Users</p>
                        <p className=" font-bold">Email: {user?.email}</p>
                        <p className=" font-bold">Phone: 01755463590</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userprofile;