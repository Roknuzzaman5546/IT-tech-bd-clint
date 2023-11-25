import { Link, } from "react-router-dom";
import loginimg from '../../../assets/authentication.gif'
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { Authcontext } from "../../Provaider/Authprovider";
import Swal from "sweetalert2";

const Register = () => {
    const { userRegister, profile } = useContext(Authcontext)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        userRegister(data.email, data.password)
            .then(result => {
                console.log(result.user)
                profile(data.name, data.photo)
                    .then(() => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            timer: 1500
                        });
                    })
            })
            .catch(error => {
                console.log(error)
            })
        reset();
    }



    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={loginimg} alt="" />
                </div>
                <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="text-5xl font-bold">Register!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name='name' placeholder="Your name" className="input input-bordered" />
                            {errors.name && <span className=" text-red-500">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} name='photo' placeholder="Photo url" className="input input-bordered" />
                            {errors.photo && <span className=" text-red-500">Photo is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", {
                                required: true
                            })} name='email' placeholder="email" className="input input-bordered" />
                            {errors.email && <span className=" text-red-500">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 10,
                                pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
                            }
                            )} name='password' placeholder="password" className="input input-bordered" />
                            {errors.password?.type == 'required' && <span className=" text-red-500">Password is required</span>}
                            {errors.password?.type == 'minLength' && <span className=" text-red-500">Password is minmum 6 carecters required</span>}
                            {errors.password?.type == 'maxLength' && <span className=" text-red-500">Password is maximun 10 carecters required</span>}
                            {errors.password?.type == 'pattern' && <span className=" text-red-500">Password is must one uppercase @ spachal carecters required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Rgister</button>
                        </div>
                        <h2>If You have in an account go to <Link to='/login'><span className=' text-blue-500 font-bold text-xl'>Log in</span></Link></h2>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;