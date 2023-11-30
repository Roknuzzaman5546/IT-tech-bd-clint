import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { Authcontext } from "../Provaider/Authprovider";

const Adminprivet = ({ children }) => {
    const { user, loading } = useContext(Authcontext)
    const [isAdim, isAdminloading] = useAdmin()
    const location = useLocation();

    if (loading || isAdminloading) {
        return <h2 className=" mt-40 text-center font-bold text-2xl font-Chinzel">Data is loading .........</h2>
    }
    if (user && isAdim) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default Adminprivet;