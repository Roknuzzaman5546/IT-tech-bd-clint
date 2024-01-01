import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Provaider/Authprovider";

const Navbar = () => {
    const { user, userLogout } = useContext(Authcontext);

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
        <div>
            <div className="navbar px-5 bg-gray-800 text-xl font-bold italic text-blue-600 p-2">
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