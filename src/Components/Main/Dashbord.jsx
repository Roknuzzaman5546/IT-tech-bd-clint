import { FaCalendar, FaCartShopping, FaCookie, FaHouseMedical, FaHouse, FaUtensils, FaList, FaBook, FaUsers,  } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { CiMenuBurger, CiShoppingBasket } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";



const Dashbord = () => {

    const isAdmin = false;
    return (
        <div className=" flex mt-2">
            <div className=" w-64 h-full bg-blue-500 p-2 rounded-md">
                <ul className="menu">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to="/dashbord/home">
                                    <FaHouse></FaHouse>
                                    Admin home</NavLink></li>
                                <li><NavLink to="/dashbord/additems">
                                    <FaUtensils></FaUtensils>
                                    Add  items</NavLink></li>
                                <li><NavLink to="/dashbord/manageitems">
                                    <FaList></FaList>
                                    Manageitems</NavLink></li>
                                <li><NavLink to="/dashbord/manageBookings">
                                    <FaBook></FaBook>
                                    Bookings</NavLink></li>
                                <li><NavLink to="/dashbord/Users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to="/dashbord/profile">
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
                    <li><NavLink to="/menu">
                        <CiMenuBurger />
                        Menu</NavLink></li>
                    <li><NavLink to="/shop/salad">
                        <CiShoppingBasket></CiShoppingBasket>
                        Shop</NavLink></li>
                </ul>
            </div>
            <div className=" flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;