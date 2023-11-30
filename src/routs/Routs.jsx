import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Pages/Home/Home";
import Allclasses from "../Components/Pages/Allclasses/Allclasses";
import Classesdetails from "../Components/Pages/Allclasses/Classesdetails";
import Login from "../Components/Pages/Authenticatoin/Login";
import Register from "../Components/Pages/Authenticatoin/Register";
import Privet from "../Components/Privetrout/Privet";
import Eroor from "../Components/Pages/Errorpage/Eroor";
import Techonitdb from "../Components/Pages/Techonit/Techonitbd";
import Dashbord from "../Components/Main/Dashbord";
import Userprofile from "../Components/Pages/dashbord/Userprofile";
import Adminprofile from "../Components/Pages/dashbord/adminprofile";
import Dashallclasses from "../Components/Pages/dashbord/DashAllclasses";
import Teacherrequest from "../Components/Pages/dashbord/Teacherrequest";
import Adminuser from "../Components/Pages/dashbord/Adminuser";
import Payment from "../Components/Pages/Allclasses/Payment/Payment";
import Teacherprofile from "../Components/Pages/dashbord/Teacherprofile";
import Teacheraddclass from "../Components/Pages/dashbord/Teacheraddclass";
import Teachermyclass from "../Components/Pages/dashbord/Teachermyclass";
import Sudentprofile from "../Components/Pages/dashbord/Sudentprofile";
import Studentenrollclass from "../Components/Pages/dashbord/Studentenrollclass";
import Dashclassdetails from "../Components/Pages/dashbord/Dashclassdetails";
import Adminprivet from "../Components/Privetrout/Adminprivet";
import Teacherprivet from "../Components/Privetrout/Teacherprivet";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Eroor></Eroor>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/allclasses',
                element: <Allclasses></Allclasses>
            },
            {
                path: '/class/:id',
                element: <Privet><Classesdetails></Classesdetails></Privet>,
                loader: () => fetch('http://localhost:5000/class')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/techon',
                element: <Privet><Techonitdb></Techonitdb></Privet>
            }
        ]
    },
    {
        path: "/dashbord",
        element: <Dashbord></Dashbord>,
        children: [
            {
                path: 'studentprofile',
                element: <Userprofile></Userprofile>
            },
            {
                path: 'adminprofile',
                element: <Adminprivet><Adminprofile></Adminprofile></Adminprivet>
            },
            {
                path: 'allclasses',
                element: <Adminprivet><Dashallclasses></Dashallclasses></Adminprivet>
            },
            {
                path: 'teachrequest',
                element: <Adminprivet><Teacherrequest></Teacherrequest></Adminprivet>
            },
            {
                path: 'adminusers',
                element: <Adminprivet><Adminuser></Adminuser></Adminprivet>
            },
            {
                path: 'teacherprofile',
                element: <Teacherprivet><Teacherprofile></Teacherprofile></Teacherprivet>
            },
            {
                path: 'addclasses',
                element: <Teacherprivet><Teacheraddclass></Teacheraddclass></Teacherprivet>
            },
            {
                path: 'myclass',
                element: <Teacherprivet><Teachermyclass></Teachermyclass></Teacherprivet>
            },
            {
                path: 'studentprofile',
                element: <Sudentprofile></Sudentprofile>
            },
            {
                path: 'myenrollclasses',
                element: <Studentenrollclass></Studentenrollclass>
            },
            {
                path: 'dashclass/:id',
                element: <Dashclassdetails></Dashclassdetails>,
                loader: () => fetch(`http://localhost:5000/classrequest`)
            }
        ]
    }
]);