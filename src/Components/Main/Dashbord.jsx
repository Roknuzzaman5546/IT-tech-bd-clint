import { FaCalendar, FaCartShopping, FaCookie, FaHouseMedical, FaHouse, FaUtensils, FaList, FaBook, FaUsers, } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { CiMenuBurger, CiShoppingBasket } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";



const Dashbord = () => {
    const isAdmin = true;
    return (
        <div className=" flex mt-2">
            <div className=" w-64 h-full bg-blue-500 p-2 rounded-md">
                <ul className="menu">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to="/dashbord/adminprofile">
                                    <CgProfile></CgProfile>
                                    Profile</NavLink></li>
                                <li><NavLink to="/dashbord/allclasses">
                                    <CiMenuBurger />
                                    All classes</NavLink></li>
                                <li><NavLink to="/dashbord/teachrequest">
                                    <FaList></FaList>
                                    Teacher request</NavLink></li>
                                <li><NavLink to="/dashbord/adminusers">
                                    <FaUsers></FaUsers>
                                    Users</NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to="/dashbord/studentprofile">
                                    <CgProfile></CgProfile>
                                    Profile</NavLink></li>
                                <li><NavLink to="/dashbord/myenrollclasses">
                                    <FaBook></FaBook>
                                    My enroll class</NavLink></li>
                            </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/">
                        <FaHouseMedical></FaHouseMedical>
                        Home</NavLink></li>
                    <li><NavLink to="/allclasses">
                        <CiMenuBurger />
                        All classes</NavLink></li>
                    <li><NavLink to="/techon">
                        <CiShoppingBasket></CiShoppingBasket>
                        Teach on It tech</NavLink></li>
                </ul>
            </div>
            <div className=" flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;