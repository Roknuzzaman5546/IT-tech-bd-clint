import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Provaider/Authprovider";
import NavLink from "./NavLink";

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

    // const menu =
    //     <>
    //         <li><Link to='/'>Home</Link></li>
    //         <li><Link to='/allclasses'>All classes</Link></li>
    //         <li><Link to='/techon'>Tech on it tech</Link></li>
    //     </>   
        
        const menu =
            <>
                <li><NavLink to='/' active={ '/'}>
                    Home
                </NavLink></li>
                <li><NavLink to='/allclasses' active={ '/allclasses'}>
                    All Class
                </NavLink></li>
                <li><NavLink to='/techon' active={ '/techon'}>
                    Tech on It tech
                </NavLink></li>
                <li><NavLink to='/about' active={ '/about'}>
                    About us
                </NavLink></li>
            </>

    // dropdown link defined
    // const otherDropDownLinks = (
    //     <>
    //         <li><NavLink href={route('faq')} active={route().current('faq')} className=" relative font-bold text-white mx-2">Faq</NavLink></li>
    //         <li><NavLink href={route('privecy.policy')} active={route().current('privecy.policy')} className=" relative font-bold text-white mx-2">Privecy Policy</NavLink></li>
    //         <li><NavLink href={route('terms.condition')} active={route().current('terms.condition')} className=" relative font-bold text-white mx-2">Terms & Condition</NavLink></li>
    //         <li><NavLink href={route('contact.us')} active={route().current('contact.us')} className=" relative font-bold text-white mx-2">Contact us</NavLink></li>
    //     </>
    // )
    // // dropdown link defined
    // const dropNavLinks = (
    //     <>
    //         <div className="dropdown dropdown-hover relative h-[65px]">
    //             <div tabIndex={0} role="button" className="relative text-white mx-3 flex items-center h-[95%]">More</div>
    //             <ul className="menu dropdown-content z-[1] bg-gray-800 pl-5  w-[220px] border-white border-x-[2px] rounded-[5px] pt-0 pb-1 absolute top-14 left-0 md:-left-24">
    //                 {otherDropDownLinks}
    //             </ul>
    //         </div>
    //     </>
    // )




    return (
        <div>
            <div className="navbar px-5 bg-gray-800 text-xl text-white font-bold italic text-Z p-2">
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
                    </div> : <Link to="/login"><button className="box butt text-sm rounded">Login</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;