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
                element: <Adminprofile></Adminprofile>
            },
            {
                path: 'allclasses',
                element: <Dashallclasses></Dashallclasses>
            },
            {
                path: 'teachrequest',
                element: <Teacherrequest></Teacherrequest>
            },
            {
                path: 'adminusers',
                element: <Adminuser></Adminuser>
            },
            {
                path: 'teacherprofile',
                element: <Teacherprofile></Teacherprofile>
             },
             {
                path: 'addclasses',
                element: <Teacheraddclass></Teacheraddclass>
             },
             {
                path: 'myclass',
                element: <Teachermyclass></Teachermyclass>
             },
             {
                path: 'studentprofile',
                element: <Sudentprofile></Sudentprofile>
             },
             {
                path: 'myenrollclasses',
                element: <Studentenrollclass></Studentenrollclass>
             }
        ]
    }
]);