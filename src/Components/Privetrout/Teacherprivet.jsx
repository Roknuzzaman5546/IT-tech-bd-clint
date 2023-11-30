import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../Provaider/Authprovider";
import useTeacher from "../hooks/useteacher";

const Teacherprivet = ({ children }) => {
    const { user, loading } = useContext(Authcontext)
    const [isTeacher, isTeacherloading] = useTeacher()
    const location = useLocation();

    if (loading || isTeacherloading) {
        return <h2 className=" mt-40 text-center font-bold text-2xl font-Chinzel">Data is loading .........</h2>
    }
    if (user && isTeacher) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default Teacherprivet;