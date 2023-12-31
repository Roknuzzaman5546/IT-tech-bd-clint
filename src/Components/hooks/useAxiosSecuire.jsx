import { useContext } from "react";
import { Authcontext } from "../Provaider/Authprovider";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const axiossecure = axios.create({
    baseURL: 'https://assignment12-projects-server.vercel.app'
})


const useAxiosSecuire = () => {
    const { userLogout } = useContext(Authcontext)
    const navigate = useNavigate()
    axiossecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log(token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
    
    axiossecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        console.log(error)
        // console.log('axios token token errror is', error.response.status)
        if (status === 401 || status === 403) {
            await userLogout();
            navigate('/')
        }
        return Promise.reject(error);
    });
    return axiossecure;
};

export default useAxiosSecuire;