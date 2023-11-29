import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { Authcontext } from '../Provaider/Authprovider';
import useAxiosSecuire from './useAxiosSecuire';

const useStudent = () => {
    const axiossecure = useAxiosSecuire()
    const { user } = useContext(Authcontext)
    const { data: isStudent, isPending: isStudentloading } = useQuery({
        queryKey: [user?.email, 'isStudent'],
            queryFn: async () => {
            const res = await axiossecure.get(`/users/student/${user.email}`)
            console.log(res.data)
            return res.data?.admin;
        }
    })
    return [isStudent, isStudentloading];
};

export default useStudent;