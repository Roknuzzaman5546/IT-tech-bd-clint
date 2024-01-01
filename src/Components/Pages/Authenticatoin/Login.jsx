import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { useContext } from 'react';
import { Authcontext } from '../../Provaider/Authprovider';
import googlepng from '../../../assets/google.png'
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa6';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import './login.css'


const Login = () => {
    const { userLogin, usergoogleLogin } = useContext(Authcontext)
    const axiospublic = useAxiosPublic();
    const location = useLocation();
    const navigate = useNavigate();

    const form = location.state?.from?.pathname || '/';

    const handleLogin = e => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)
        userLogin(email, password)
            .then(result => {
                console.log(result.user)
                if (result.user) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/')
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handlegooglelogin = () => {
        usergoogleLogin()
            .then(result => {
                console.log(result.user)
                if (result) {
                    const userInfo = {
                        name: result.user?.displayName,
                        email: result.user?.email,
                        image: result.user?.photoURL,
                        role: "user"
                    }
                    axiospublic.post('/users', userInfo)
                        .then(res => {
                            console.log(res.data)
                            Swal.fire("User succesfully creat and update profile!");
                            reset();
                            navigate('/')
                        })
                    navigate('/')
                }
            })
    }

    return (
        <div className='loginbg bg-fixed'>
            <div className="hero min-h-screen py-10 backdrop-blur-sm">
                <div className="hero-content flex-col lg:flex-row gap-3">
                    <div className=' w-4/6 shadow-2xl backdrop-blur-sm py-10 rounded-lg'>
                        <h2 className=' text-black text-5xl font-serif font-bold'>It <span className=' text-white'>tech </span>Online learning</h2>
                        <p className=' text-black'>Please log in our site</p>
                    </div>
                    <div className="card shadow-2xl backdrop-blur-xl lg:w-1/2 w-full">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div>
                            <button className='btn w-9/12 font-bold' onClick={handlegooglelogin}><img className=' w-5 h-5' src={googlepng} alt="" /> <p>Google</p></button>
                        </div>
                        <h2 className=' text-white'>If you new in our resturent go to <Link to='/register'><span className=' text-blue-700 font-bold text-xl'>Register</span></Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;