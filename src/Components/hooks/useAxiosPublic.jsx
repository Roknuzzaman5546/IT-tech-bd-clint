import axios from "axios";

const useAxiosPublic = () => {
    const axiospublic = axios.create({
        baseURL: 'https://assignment12-projects-server.vercel.app'
    })
    return axiospublic;
};

export default useAxiosPublic;