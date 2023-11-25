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
            }
        ]
    },
]);