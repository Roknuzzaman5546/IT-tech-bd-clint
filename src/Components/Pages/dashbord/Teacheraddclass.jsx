import { useForm } from "react-hook-form";
import Title from "../../Shared/Title";

const Teacheraddclass = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
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
            <div className=" w-10/12 mx-auto">
                <div className=" bg-blue-300 space-y-2 rounded-md">
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", {
                                required: true
                            })} name='email' placeholder="email" className="input input-bordered" />
                            {errors.email && <span className=" text-red-500">Email is required</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" {...register("title", { required: true })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" {...register("shortDescription", { required: true })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
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