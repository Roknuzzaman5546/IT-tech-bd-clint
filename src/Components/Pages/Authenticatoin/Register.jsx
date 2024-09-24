import { Link, useNavigate, } from "react-router-dom";
import loginimg from '../../../assets/authentication.gif'
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { Authcontext } from "../../Provaider/Authprovider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import PrimaryButton from "../../Shared/PrimaryButton";
import './login.css'

const Register = () => {
    const axiospublic = useAxiosPublic();
    const navigate = useNavigate();
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
                        const userInfo = {
                            name: data.name,
                            image: data.photo,
                            email: data.email,
                            role: "user"
                        }
                        axiospublic.post('/users', userInfo)
                            .then(res => {
                                console.log(res.data)
                                Swal.fire("User succesfully creat and update profile!");
                                reset();
                                navigate('/')
                            })
                    })
            })
            .catch(error => {
                console.log(error)
            })
        reset();
    }



    return (
        <div className='loginbg bg-fixed'>
            <div className="hero min-h-screen py-10 backdrop-blur-sm">
                <div className="hero-content lg:w-1/2 w-11/12">
                    <div className="card shadow-2xl backdrop-blur-xl w-full">
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
                            </div>
                            <h2 className=" text-white ml-1">If You have in an account go to <Link to={'/login'}><span className=' text-blue-600 font-bold text-xl'>Log in</span></Link></h2>
                            <div className="flex items-center justify-start mt-2">
                                <PrimaryButton className="ms-4 box butt" >
                                    Register
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;


{/* <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">
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
    </form>
    <h2>If You have in an account go to <Link to='/login'><span className=' text-blue-500 font-bold text-xl'>Log in</span></Link></h2>
</div> */}