import { Link, } from 'react-router-dom';
import loginimg from '../../../assets/authentication.gif'


const Login = () => {
    // const location = useLocation();
    // const navigate = useNavigate();

    // const form = location.state?.from?.pathname || '/';
    // console.log(form)

    const handleLogin = e => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)
    }

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={loginimg} alt="" />
                </div>
                <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <h2>If you new in our resturent go to <Link to='/register'><span className=' text-blue-500 font-bold text-xl'>Register</span></Link></h2>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;