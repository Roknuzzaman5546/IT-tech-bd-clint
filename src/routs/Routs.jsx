import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Pages/Home/Home";
import Allclasses from "../Components/Pages/Allclasses/Allclasses";
import Classesdetails from "../Components/Pages/Allclasses/Classesdetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
                element: <Classesdetails></Classesdetails>,
                loader: () => fetch('/class.json')
            }
        ]
    },
]);