import { Link, useLocation, useNavigate, } from 'react-router-dom';
import loginimg from '../../../assets/authentication.gif'
import bgimg from '../../../assets/azzedine-rouichi-xjYSmFBrdgY-unsplash.jpg'
import { useContext } from 'react';
import { Authcontext } from '../../Provaider/Authprovider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa6';
import useAxiosPublic from '../../hooks/useAxiosPublic';


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
        <div className="hero min-h-screen bg-fixed" style={{backgroundImage: 'url(https://i.ibb.co/m9g4WpK/azzedine-rouichi-xj-YSm-FBrdg-Y-unsplash.jpg)'}}>
            <div className="hero-content">
                <div className="card bg-black text-white shadow-2xl">
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
                        <button className='btn w-9/12 font-bold' onClick={handlegooglelogin}><FaGoogle></FaGoogle> Google</button>
                    </div>
                    <h2>If you new in our resturent go to <Link to='/register'><span className=' text-blue-500 font-bold text-xl'>Register</span></Link></h2>
                </div>
            </div>
        </div>
    );
};

export default Login;