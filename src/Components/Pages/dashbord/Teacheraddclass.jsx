import { useForm } from "react-hook-form";
import Title from "../../Shared/Title";
import useAxiosSecuire from "../../hooks/useAxiosSecuire";
import Swal from "sweetalert2";
import { useContext } from "react";
import { Authcontext } from "../../Provaider/Authprovider";

const Teacheraddclass = () => {
    const { user } = useContext(Authcontext)
    const axiossecuire = useAxiosSecuire()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        const applyform = {
            name: data.name,
            img: data.photo,
            shortDescription: data.shortDescription,
            title: data.title,
            email: user?.email,
            price: data.price,
            totalEnrolment: 0,
            status: 'pending'
        }
        console.log(applyform)
        axiossecuire.post('/classrequest', applyform)
            .then(res => {
                console.log(res.data)
                Swal.fire("Request has been submited!");
                reset();
            })
            .catch(error => {
                console.log(error)
            })
        reset();
    }

    return (
        <div>
            <Title
                Subheading={'Add your calass is here'}
                heading={'add classes'}
            ></Title>
            <div className=" w-11/12 mx-auto">
                <div className=" bg-blue-300 px-5 py-7  space-y-2 rounded-md">
                    <h2 className=" text-center text-3xl font-rancho font-bold text-gray-600">Add class</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=" flex md:flex-row flex-col gap-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Name*</span>
                                </label>
                                <input type="text" placeholder="Type here" {...register("name", { required: true })} className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} name='photo' placeholder="Photo url" className="input input-bordered" />
                                {errors.photo && <span className=" text-red-500">Photo is required</span>}
                            </div>
                        </div>
                        <div className=" flex md:flex-row flex-col gap-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" {...register("title", { required: true })} placeholder="Type here" className="input input-bordered" />
                            </div>
                        </div>
                        <div className=" flex md:flex-row flex-col gap-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <input type="text" {...register("shortDescription", { required: true })} placeholder="Type here" className="input input-bordered" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered " />
                            </div>
                        </div>
                        <br />
                        <button className="btn mt-3 font-bold">
                            Add class
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Teacheraddclass;