import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Provaider/Authprovider";

const Navbar = () => {
    const { user, userLogout } = useContext(Authcontext);

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute("data-theme", localTheme)
    }, [theme]);
    const handletheme = (event) => {
        if (event.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }

    const handlLogout = () => {
        userLogout()
            .then(() => {
            })
            .catch(error => {
                console.log(error)
            })
    }

    const menu =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/allclasses'>All classes</Link></li>
            <li><Link to='/techon'>Tech on it tech</Link></li>
        </>

    return (
        <div className=" mt-2">
            <div className="navbar px-5 rounded-lg bg-gray-800 max-w-screen-lg mx-auto text-xl font-bold italic text-blue-600">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <img className=" w-10 rounded-full" src={logo} alt="" />
                    <a className="btn btn-ghost font-rubik text-blue-600 text-2xl font-bold font-Chinzel">IT tech</a>
                    <label onClick={handletheme} className="cursor-pointer grid place-items-center">
                        <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-blue-600">
                            {menu}
                        </ul>
                    </div>
                    {user ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} alt="" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] px-2 py-5 shadow bg-gray-800 rounded-box w-52">
                            <li>
                                <a>
                                    <h2 className=" uppercase">{user.displayName}</h2>
                                </a>
                            </li>
                            <li><Link to="/dashbord/studentprofile">Dashbord</Link></li>
                            <li><Link onClick={handlLogout}>Logout</Link></li>
                        </ul>
                    </div> : <Link to="/login"><button className="btn">Login</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;