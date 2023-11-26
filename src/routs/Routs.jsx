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
import Myenrollclasses from "../Components/Pages/dashbord/Myenrollclasses";
import Userprofile from "../Components/Pages/dashbord/Userprofile";

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
                loader: () => fetch('/class.json')
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
                path: "myenrollclasses",
                element: <Myenrollclasses></Myenrollclasses>
            },
            {
                path: 'profile',
                element: <Userprofile></Userprofile>
            }
        ]
    }
]);