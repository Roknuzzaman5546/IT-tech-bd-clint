import axios from "axios";

const useAxiosPublic = () => {
    const axiospublic = axios.create({
        baseURL: 'http://localhost:5000'
    })
    return axiospublic;
};

export default useAxiosPublic;