import { useForm } from "react-hook-form";
import Title from "../../Shared/Title";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext } from "react";
import { Authcontext } from "../../Provaider/Authprovider";
import Swal from "sweetalert2";


const Techonitdb = () => {
    const axiospublic = useAxiosPublic();
    const { user } = useContext(Authcontext)
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        const applyform = {
            name: data.name,
            image: user?.photoURL,
            experience: data.experience,
            title: data.title,
            status: "pending", 
            category: data.category
        }
        console.log(applyform)
        axiospublic.post('/teacherreq', applyform)
            .then(res => {
                console.log(res.data)
                Swal.fire("Request has been submited!");
                reset();
            })
    }

    return (
        <div className="">
            <div>
                <Title
                    Subheading={"If you tech our site then fil up the form"}
                    heading={'Feel up the form'}
                ></Title>
            </div>
            <div className=" bg-blue-300 px-5 py-8 space-y-2 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name*</span>
                        </label>
                        <input type="text" placeholder="Type here" {...register("name", { required: true })} className="input input-bordered w-full" />
                    </div>
                    <div className=" flex md:flex-row flex-col items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Experience*</span>
                            </label>
                            <select {...register("experience", { required: true })}
                                className="select select-bordered w-full">
                                <option disabled defaultValue={"Please select"}>Please select</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Experienced">Experienced</option>
                                <option value="Some idea">Some idea</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" {...register("title", { required: true })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select {...register("category", { required: true })}
                            className="select select-bordered w-full">
                            <option disabled defaultValue={"Please select"}>Please select</option>
                            <option value="webdevlopment">Web devlopment</option>
                            <option value="digitalmarketing">Digital marketing</option>
                            <option value="graphicdesign">Graphic Design</option>
                            <option value="lernbasic">Leron basic js</option>
                            <option value="data entry">Data entry</option>
                        </select>
                    </div>
                    <br />
                    <button className="btn mt-3 font-bold">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Techonitdb;