import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import { useContext, useState, useCallback } from "react";
import { Authcontext } from "../Provaider/Authprovider";
import profileImg from "../../assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
    const { user, userLogout } = useContext(Authcontext);
    console.log(user);

    const handleLogout = () => {
        userLogout()
            .then(() => { })
            .catch(error => {
                console.log(error);
            });
    };


    const menu = (
        <>
            <li>
                <NavLink
                    to="/"
                    className=" relative font-bold text-white mx-2"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/allclasses"
                    className=" relative font-bold text-white mx-2"
                >
                    All Class
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/techon"
                    className=" relative font-bold text-white mx-2"
                >
                    Tech on It tech
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className=" relative font-bold text-white mx-2"
                >
                    About us
                </NavLink>
            </li>
        </>
    );

    const otherDropDownLinks = (
        <>
            <li>
                <NavLink
                    to="/faq"
                    className=" relative font-bold text-white mx-2"
                >
                    FAQ
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/privacy"
                    className=" relative font-bold text-white mx-2"
                >
                    Privacy Policy
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/condition"
                    className=" relative font-bold text-white mx-2"
                >
                    Terms & Condition
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    className=" relative font-bold text-white mx-2"
                >
                    Contact us
                </NavLink>
            </li>
        </>
    );

    const dropNavLinks = (
        <>
            <div className="dropdown dropdown-hover relative h-[65px]">
                <div tabIndex={0} role="button" className="relative text-white mx-3 flex items-center h-[95%]">More</div>
                <ul className="menu dropdown-content z-[1] bg-gray-800 pl-5  w-[220px] border-white border-x-[2px] rounded-[5px] pt-0 pb-1 absolute top-14 left-0 md:-left-24">
                    {otherDropDownLinks}
                </ul>
            </div>
        </>
    );

    return (
        <div>
            <div className="navbar px-5 bg-gray-800 text-xl text-white font-bold italic p-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 rounded-box w-52">
                            {menu}
                            {dropNavLinks}
                        </ul>
                    </div>
                    <Link className="flex items-center justify-between" to={'/'}>
                        <img className="w-10 rounded-full" src={logo} alt="" />
                        <a className="btn btn-ghost font-serif text-xl">IT tech</a>
                    </Link>
                </div>
                <div className="navbar-end">
                    {/* Navbar for larger devices */}
                    <div className="hidden lg:flex navbar-center">
                        <ul className="menu text-white menu-horizontal items-center">
                            {menu}
                            {dropNavLinks}
                        </ul>
                    </div>
                    {user ? (
                        <div className="dropdown dropdown-end dropdown-hover">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL ?? profileImg} className='w-5 h-5 md:w-7 md:h-7 rounded-full' alt="user avatar" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] px-2 py-5 shadow bg-gray-800 rounded-box w-52">
                                <li>
                                    <h2 className="uppercase text-white">{user?.displayName}</h2>
                                </li>
                                <li><Link to="/dashbord/studentprofile" className="text-white">Dashboard</Link></li>
                                <li><Link onClick={handleLogout} className="text-white">Logout</Link></li>
                            </ul>
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className="box butt text-sm rounded">Login</button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
