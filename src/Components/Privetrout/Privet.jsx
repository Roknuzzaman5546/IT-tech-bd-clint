import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../Provaider/Authprovider";

const Privet = ({ children }) => {
    const { user, loading } = useContext(Authcontext)
    const location = useLocation();
    if (loading) {
        return <h2 className=" text-center font-bold text-2xl font-Chinzel">Data is loading .........</h2>
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default Privet;